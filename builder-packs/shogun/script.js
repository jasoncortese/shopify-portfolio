(() => {
  'use strict';
  document.querySelectorAll('.sp-root').forEach(root => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = 'true';
    const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
    const cart = [];
    const cartDialog = root.querySelector('[data-cart-dialog]');
    let lastFocus;
    function openDialog(dialog) {
      if (!dialog || dialog.open) return;
      lastFocus = document.activeElement;
      dialog.showModal();
      dialog.querySelector('[data-close]')?.focus();
    }
    root.querySelectorAll('dialog').forEach(dialog => {
      dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const controls = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')].filter(el => !el.disabled && el.getClientRects().length);
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      });
      dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', () => { if (lastFocus?.isConnected) lastFocus.focus(); });
      dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
    });
    function renderCart() {
      if (!cartDialog) return;
      const list = cartDialog.querySelector('[data-cart-lines]');
      list.replaceChildren();
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        const description = document.createElement('span');
        description.textContent = item.name;
        const detail = document.createElement('small');
        detail.textContent = `${item.quantity} × ${money(item.price)}`;
        description.append(detail);
        const remove = document.createElement('button');
        remove.className = 'icon-btn'; remove.type = 'button'; remove.textContent = 'Remove';
        remove.setAttribute('aria-label', `Remove ${item.name} from bag`);
        remove.addEventListener('click', () => { cart.splice(index, 1); renderCart(); cartDialog.querySelector('[data-close]').focus(); });
        li.append(description, remove); list.append(li);
      });
      cartDialog.querySelector('[data-cart-empty]').hidden = cart.length > 0;
      cartDialog.querySelector('[data-cart-total]').textContent = money(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
      root.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0)));
    }
    root.querySelectorAll('[data-open-cart]').forEach(button => button.addEventListener('click', () => { renderCart(); openDialog(cartDialog); }));
    root.querySelector('[data-bag-form]')?.addEventListener('submit', event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const quantity = Number(new FormData(form).get('quantity'));
      const strap = new FormData(form).get('strap');
      cart.push({ name: `The Arc · Espresso · ${strap} strap`, price: 285, quantity });
      renderCart(); openDialog(cartDialog);
    });
    const kit = root.querySelector('[data-kit-form]');
    function kitPrice() { return 58 + (kit?.elements.grip.checked ? 18 : 0) + (kit?.elements.cable.checked ? 24 : 0); }
    kit?.addEventListener('change', () => { kit.querySelector('[data-kit-total]').textContent = money(kitPrice()); });
    kit?.addEventListener('submit', event => {
      event.preventDefault();
      if (!kit.reportValidity()) return;
      const options = ['case', ...(kit.elements.grip.checked ? ['grip'] : []), ...(kit.elements.cable.checked ? ['cable'] : [])];
      cart.push({ name: `${kit.elements.device.value} · ${options.join(' + ')}`, price: kitPrice(), quantity: 1 });
      renderCart(); openDialog(cartDialog);
    });
    const saved = new Set();
    const cards = [...root.querySelectorAll('[data-look]')];
    try { const stored = JSON.parse(localStorage.getItem('after-dark-saved') || '[]'); if (Array.isArray(stored)) stored.forEach(id => { if (cards.some(card => card.dataset.look === id)) saved.add(id); }); } catch { /* Saving still works for this visit when storage is unavailable. */ }
    function renderSaved() {
      cards.forEach(card => {
        const button = card.querySelector('[data-save]');
        const active = saved.has(card.dataset.look);
        button.setAttribute('aria-pressed', String(active));
        button.setAttribute('aria-label', `${active ? 'Remove' : 'Save'} ${card.dataset.title}${active ? ' from' : ' to'} shortlist`);
        button.textContent = active ? '♥' : '♡';
      });
      root.querySelectorAll('[data-saved-count]').forEach(el => el.textContent = String(saved.size));
      const list = root.querySelector('[data-saved-list]');
      if (list) {
        list.replaceChildren();
        cards.filter(card => saved.has(card.dataset.look)).forEach(card => { const li = document.createElement('li'); li.textContent = card.dataset.title; list.append(li); });
        root.querySelector('[data-saved-empty]').hidden = saved.size > 0;
      }
      try { localStorage.setItem('after-dark-saved', JSON.stringify([...saved])); } catch { /* Session-only fallback. */ }
    }
    cards.forEach(card => card.querySelector('[data-save]').addEventListener('click', () => {
      const id = card.dataset.look;
      saved.has(id) ? saved.delete(id) : saved.add(id);
      renderSaved();
      root.querySelector('[data-saved-status]').textContent = `${card.dataset.title} ${saved.has(id) ? 'saved to' : 'removed from'} your shortlist.`;
    }));
    root.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      root.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      cards.forEach(card => card.hidden = filter !== 'all' && !card.dataset.tags.split(' ').includes(filter));
      root.querySelector('[data-results]').textContent = `${cards.filter(card => !card.hidden).length} costume ideas`;
    }));
    root.querySelectorAll('[data-open-saved]').forEach(button => button.addEventListener('click', () => openDialog(root.querySelector('[data-saved-dialog]'))));
    if (cards.length) renderSaved();
    root.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
  });
})();
