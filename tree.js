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
        this.children.forEach((child,index) =>{
            if(child.name === name){
                this.children.splice(index,1)
            }
        })
    }

    getChild(name){
        for(const child of this.children){
            if(child.name === name) return child
            const result = child.getChild(name)
            if(!result) continue
            return result
        }
        return false
    }

    travaser(cb){
        for(const child of this.children){
            cb(child)
            child.travaser(cb)
        }
    }

}

const tree = new Tree("root")
const node1 = tree.add("node1")
const node2 = tree.add("node2")
const node3 = node2.add("node3")
const node4 = node3.add("node4")

console.log(tree.getChild("node4"));