// script.js - load travel_accomodation_api.json and render recommendations
const apiPath = './travel_accomodation_api.json';

function el(tag, cls, inner) {
	const d = document.createElement(tag);
	if (cls) d.className = cls;
	if (inner !== undefined) d.innerHTML = inner;
	return d;
}

function renderCard(item) {
	const card = el('div', 'card');
	if (item.imageUrl) {
		const img = document.createElement('img');
		img.src = item.imageUrl;
		img.alt = item.name || '';
		card.appendChild(img);
	}
	const body = el('div', 'card-body');
	body.appendChild(el('h3', '', item.name || ''));
	body.appendChild(el('p', '', item.description || ''));
	card.appendChild(body);
	return card;
}

function loadData() {
	fetch(apiPath)
		.then(r => {
			if (!r.ok) throw new Error('Failed to load data');
			return r.json();
		})
		.then(data => initializeUI(data))
		.catch(err => console.error('Error loading API:', err));
}

function initializeUI(data) {
	// Beaches (take first two)
	const beachesEl = document.getElementById('beaches');
	if (beachesEl && Array.isArray(data.beaches)) {
		beachesEl.innerHTML = '';
		data.beaches.slice(0,2).forEach(b => beachesEl.appendChild(renderCard(b)));
	}

	// Temples (take first two)
	const templesEl = document.getElementById('temples');
	if (templesEl && Array.isArray(data.temples)) {
		templesEl.innerHTML = '';
		data.temples.slice(0,2).forEach(t => templesEl.appendChild(renderCard(t)));
	}

	// Countries: show each country's first two cities as cards grouped
	const countriesEl = document.getElementById('countries');
	if (countriesEl && Array.isArray(data.countries)) {
		countriesEl.innerHTML = '';
		data.countries.forEach(country => {
			const wrapper = el('div', 'card');
			const header = el('div', 'card-body');
			header.appendChild(el('h3', '', country.name));
			wrapper.appendChild(header);
			const inner = el('div', 'cards');
			(country.cities || []).slice(0,2).forEach(city => inner.appendChild(renderCard(city)));
			const container = el('div', 'card-body');
			container.appendChild(inner);
			wrapper.appendChild(container);
			countriesEl.appendChild(wrapper);
		});
	}

	// Country search behavior
	const btn = document.getElementById('btnCountrySearch');
	if (btn) btn.addEventListener('click', () => searchByCountry(data));

	// Contact page send email button (client-side only)
	const sendBtn = document.getElementById('sendBtn');
	if (sendBtn) sendBtn.addEventListener('click', sendEmail);
}

function searchByCountry(data) {
	const q = (document.getElementById('countryInput') || {}).value || '';
	const out = document.getElementById('countries');
	if (!q) {
		alert('Enter a country name to search.');
		return;
	}
	const match = (data.countries || []).find(c => c.name.toLowerCase() === q.trim().toLowerCase());
	if (!out) return;
	out.innerHTML = '';
	if (!match) {
		out.innerHTML = `<div class="search-result">No country found for "${q}".</div>`;
		return;
	}
	// Show header and up to two cities
	const wrapper = el('div', 'card');
	wrapper.appendChild(el('div', 'card-body', `<h3>${match.name}</h3>`));
	const inner = el('div', 'cards');
	(match.cities || []).slice(0,2).forEach(city => inner.appendChild(renderCard(city)));
	wrapper.appendChild(inner);
	out.appendChild(wrapper);
}

function sendEmail() {
	const email = document.getElementById('email')?.value || '';
	const subject = document.getElementById('subject')?.value || '';
	const message = document.getElementById('message')?.value || '';
	if (!email || !subject || !message) { alert('Please complete all fields.'); return; }
	alert('Thank you! Your message has been prepared to send. (Client-only demo)');
	// Real implementation would use a backend or mailto link. Example (uncomment to use):
	// window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

// Initialize on pages that include this script
document.addEventListener('DOMContentLoaded', () => loadData());
