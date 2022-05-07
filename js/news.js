window.onload = function () {
	const card_root = document.getElementById('card-root');

	function createCard(_title, _content) {
		let card = document.createElement('div');
		let title = document.createElement('div');
		let h5 = document.createElement('h5');
		
		let content = document.createElement('div');
		let p = document.createElement('p');

		card.classList.add('card-body');

		h5.classList.add('card-body-title');
		h5.classList.add('MC');
		h5.innerText = _title;

		p.classList.add('card-body-text');
		p.innerText = _content;

		title.appendChild(h5);
		content.appendChild(p);

		card.appendChild(title);
		card.appendChild(content);
		card_root.appendChild(card);
	}
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://akf4ic1lg8.execute-api.ap-southeast-1.amazonaws.com/dev/feed/');
	xhr.onerror = function () {
		createCard('There is no news.', 'Server down i guess?');
		card_root.classList.remove('hidden');
	};
	xhr.onload = function () {
		const datas = JSON.parse(xhr.responseText);
		datas.forEach(data => {
			createCard(data.title, data.content);
		});
		card_root.classList.remove('hidden');
	};
	
	xhr.send();
};