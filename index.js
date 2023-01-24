// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)




function newImage(src, left, bottom,) {
    let newImage = document.createElement('img')
    newImage.src = src
    newImage.style.position = 'fixed'
    newImage.style.left = left + "px"
    newImage.style.bottom = bottom + "px"
    document.body.append(newImage)
}

newImage('assets/green-character.gif', 100, 100)
newImage("assets/pine-tree.png", 450, 200)
newImage("assets/tree.png", 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)

//============Items under here==================


function newItem(src, left, bottom) {
    let sword = document.createElement('img')
    sword.src = src
    sword.style.position = 'fixed'
    sword.style.left = left + 'px'
    sword.style.bottom = bottom + 'px'
    document.body.append(sword)

    sword.addEventListener('dblclick', function(){
        sword.remove()
    })

}
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

