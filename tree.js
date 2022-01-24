class Tree{
    constructor(name,parent=null,children=[]){
        this.name = name
        this.parent = parent
        this.children = children
    }

    add(name){
        const newChild = new Tree(name)
        newChild.parent = this
        this.children.push(newChild)
        return newChild
    }

    remove(name){
        this.children.forEach((child,index)=>{
            console.log(child);
            if(child.name === name) return this.children.splice(index,1)
        })
        return false
    }

}

const tree = new Tree("root")
const node1 = tree.add("node1")
const node2 = node1.add("node2")
const node3 = node2.add("node3")
console.log(tree.remove("node1"));