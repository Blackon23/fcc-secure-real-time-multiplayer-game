class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
  }

  movePlayer(dir, speed) {
    switch(dir) {
      case 'up':
        this.y -= speed;
        break;
      case 'down':
        this.y += speed;
        break;
      case 'left':
        this.x -= speed;
        break;
      case 'right':
        this.x += speed;
        break;
    }
  }

  collision(item) {
    const dx = this.x - item.x;
    const dy = this.y - item.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 10;
  }

  calculateRank(arr) {
    const totalPlayers = arr.length
    const sortedRanks = arr.sort((a, b) => b.score - a.score)
    let rank;
    for (let n = 0; n < totalPlayers; n++) {
      if (this.score === sortedRanks[n].score) {
        rank = n + 1
      }
    }
    if (!rank || !totalPlayers) {
      return "..."
    }
    return `Rank: ${rank}/${totalPlayers}`
    }

}

export default Player;
