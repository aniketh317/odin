function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        this.spin();
        console.log(reel.symbols[(this.reels[0].position+reel.symbols.length-1)%reel.symbols.length]+'|'+reel.symbols[(this.reels[1].position+reel.symbols.length-1)%reel.symbols.length]+'|'+reel.symbols[(this.reels[2].position+reel.symbols.length-1)%reel.symbols.length]);
        console.log(reel.symbols[this.reels[0].position%reel.symbols.length]+'|'+reel.symbols[this.reels[1].position%reel.symbols.length]+'|'+reel.symbols[this.reels[2].position%reel.symbols.length]);
        console.log(reel.symbols[(this.reels[0].position+1)%reel.symbols.length]+'|'+reel.symbols[(this.reels[1].position+1)%reel.symbols.length]+'|'+reel.symbols[(this.reels[2].position+1)%reel.symbols.length]);
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★