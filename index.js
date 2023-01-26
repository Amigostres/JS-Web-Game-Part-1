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



// this function will spawn entities like how you would spawn a greenCharacter
function newImage(src, left, bottom,) { // takes 3 parameters : Image source, left, right
    let newImage = document.createElement('img')
    newImage.src = src //property wil give it a new source from the parameter
    newImage.style.position = 'fixed' //makes sure that it stays in place no matter where your scroll in the web page
    newImage.style.left = left + "px"
    newImage.style.bottom = bottom + "px"
    document.body.append(newImage) // appends the newImage to existance
}


// the lines below will create new Entities like: greenCharacter, pinetree, tree, pillar, crate, and well from the function above
newImage('assets/green-character.gif', 100, 100)
newImage("assets/pine-tree.png", 450, 200)
newImage("assets/tree.png", 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)

//============Items under here==================

//makes a new function so that we can spawn Items and pick them up by double clicking
function newItem(src, left, bottom) {
    //the sword variable is just a place holder variable
    let item = document.createElement('img')
    item.src = src
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)


    //adding a event listener so that it will makje the item disapear from the page using .remove()
    item.addEventListener('dblclick', function(){
        item.remove()
    })

}


//yeah nothing to say here
//call the item function and will spawn these items
newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

