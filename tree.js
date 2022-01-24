class Tree{
    constructor(name,parent=null,children=[]){
        this.name = name
        this.parent = parent 
        this.children = children
    }

    add(name){
        const newNode = new Tree(name,this)
        this.children.push(newNode)
        return newNode
    }

    remove(name){
        this.children.forEach((child,index)=>{
            if(child.name === name){
                this.children.splice(index,1)
            }
        })
    }

    getChildren(name){
        for(const child of this.children){
            if(child.name === name) return child
            const result = child.getChildren(name)
            if(!result) continue
            return result
        }
        return false
    }

    #getTreeString(node,spaceCount){
        let str = ""
        node.children.forEach(child=>{
            str += `${" ".repeat(spaceCount)}${child.name}${this.#getTreeString(child,spaceCount + 2)}`
        })
        return str
    }

    print(){
        console.log(`\n${this.name}${this.#getTreeString(this,2)}`);
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



tree.travaser(child=>{
    console.log(child);
})

tree.print()

