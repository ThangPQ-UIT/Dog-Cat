function Cat () {

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse)
}

Cat.prototype.kill = function(mouse) {
	console.log('Mouse was killed')
}

module.exports = Cat;
