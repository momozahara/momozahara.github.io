window.onload = function () {
	const card_root = document.getElementById('card-root');

	function createCard(_title, _content, _time) {
		let card = document.createElement('div');
		let title = document.createElement('div');
		let h5 = document.createElement('h5');

		let pt = document.createElement('p');
		
		let content = document.createElement('div');
		let p = document.createElement('p');

		card.classList.add('card-body');

		h5.classList.add('card-body-title');
		h5.classList.add('MC');
		h5.innerText = _title;

		pt.classList.add('card-body-title-time');
		let time = new Date(_time);
		let time_str = time.toLocaleString('en-US', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
			timeZone: 'UTC'
		});
		pt.innerHTML = time_str;

		p.classList.add('card-body-text');
		p.innerText = _content;

		title.appendChild(h5);
		content.appendChild(p);
		
		card.appendChild(pt);
		card.appendChild(title);
		card.appendChild(content);
		card_root.appendChild(card);
	}
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.pcode.dev/feed/');
	xhr.onerror = function () {
		createCard('There is no news.', 'Server down i guess?');
		card_root.classList.remove('hidden');
	};
	xhr.onload = function () {
		const datas = JSON.parse(xhr.responseText);
		datas.forEach(data => {
			createCard(data.title, data.content, data.createdAt);
		});
		card_root.classList.remove('hidden');
	};
	
	xhr.send();
};