export default {
    moveTube(origin, target) {
        if (origin === target) return false
        if (target.length < 4) {
            const lastColorTarget = target[target.length - 1] || ""
            const lastColorOrigin = origin[origin.length - 1] || ""
            if (lastColorOrigin === lastColorTarget || lastColorTarget === "") {
                const numberToMove = this.numberOfSameColorInTop(origin)
                // Avoid moving an entire tube to an empty tube
                if (numberToMove === origin.length && target.length === 0) return false
                if (numberToMove + target.length <= 4) {
                    for (let i = 0; i < numberToMove; i++) {
                        const color = origin.pop()
                        target.push(color)
                    }
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
        return true
    },
    numberOfSameColorInTop(tube) {
        if (!tube.length) return 0
        const lastColor = tube[tube.length - 1]
        let number = 0
        for (let i = tube.length - 1; i >= 0; i--) {
            if (tube[i] === lastColor) number++
            else break;
        }
        return number
    },
    isFinalStateTube(tube) {
        if (!tube.length) return true
        if (tube.length != 4) return false
        const color = tube[tube.length - 1]
        for (let el of tube) {
            if (el !== color) return false
        }
        return true
    }
}