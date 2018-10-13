
class Node {
	constructor() {
		this.letter = letter;
		this.isWord = false;
		this.prefixes = 0;
		this.children = {};
	}
}

class Trie {
	constructor() {
		this.root = '';
	}
	add(word){
		if(!this.root) return null;
		this._addNode(this.root, word);
	}
	_addNode(node, word){
		if(!node || !word) return null;

		node.prefixes++;
		const letter = word.charAt(0);
		const child = node.children[letter];
	}
}
