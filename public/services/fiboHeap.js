

class Node {
    constructor(val) {
      this.val = val;
      this.degree = 0;
      this.child = null;
      this.next = null;
      this.prev = null;
      this.father = null;
    }
    
    toString(){ 
      return "val: "+this.val+", degree: "+this.degree+", child: "+this.check(this.child)+", prev: "+this.check(this.prev)+", next: "+this.check(this.next)+", father: "+this.check(this.father);
    }
    
    check(node){
      return (node != null) ? node.val : null;
    }
  }
  
  class FHeap {
    constructor() {
      this.array = [];
      this.min   = null;
      this.root  = null;
      this.last  = null;
      this.cont  = 0;
      this.element = [];
    }

    elementsHeap(node){
        let aux = node;
        while (aux != null){
          this.element.push(aux.toString());
          this.elementsHeap(aux.child);
          aux = aux.next;
        }
    }
    
    insert(val){
      if(this.root == null){
        this.root = new Node(val)
        this.min = this.root;
      }else{
        let new_element = new Node(val);
        if (this.root == this.min){
          this.root = new_element;
          this.root.next = this.min;
          this.min.prev = this.root;
          this.last = this.root;
        }else{
          this.last.next = new_element;
          new_element.prev = this.last;
          this.last = this.last.next;
          this.last.next = this.min;
          this.min.prev = this.last;
        }
        if (this.last.val < this.min.val){
          this.min = this.last;
            if (this.min.prev == null)
                this.last = this.min.prev;
        }
      }
      this.cont += 1;
    }
  
    delete(){
      console.log("a borrar: "+this.min)
      if(this.root == null){
        return null;
      }else{
          //console.log("Mama: "+this.min.toString())
        if(this.min.child != null){
            //console.log("A")
          if(this.min.prev == null){
              this.root = this.min.child;
          }else{
              this.min.prev.next = this.min.child;
          }
          let aux2 = this.min.child;
          while(aux2.next != null) aux2 = aux2.next;
          aux2.next = this.min.next;
          if(this.min.next != null) this.min.next.prev = aux2;
        }else{
            //console.log("B")
          if (this.min.prev == null){
            this.root = this.min.next;
            if(this.root != null) this.root.prev = null;
          }else{
            this.min.prev.next = this.min.next;
            if(this.min.next != null) this.min.next.prev = this.min.prev;
          }
        }
        /*console.log("Hola")
        this.printRaizMain(this.root)
        console.log("Hola")*/
        this.min = this.root;
        this.consolidate();
        this.cont -= 1;
      }
    }
  
    deleteRoot(node2){
      let aux = node2
      if (node2.prev == null){
        this.root = aux.next;
        if(this.root != null) this.root.prev = null;
      }else{
        aux.prev.next = aux.next;
        if(aux.next != null) aux.next.prev = aux.prev;
      }
      node2.next = null
      return node2
    }
    
  
    union(node1,node2){
      node2 = this.deleteRoot(node2);
      if (node1.val < node2.val){
          node2.next = node1.child
          if(node2.next != null) node2.next.prev = node2;
          node1.child = node2
      }else{
          let aux = new Node(node1.val)
          aux.degree = node1.degree;
          aux.child = node1.child;
          node1.val = node2.val;
          node1.child = node2.child;
          aux.next = node1.child;
          if(aux.next != null) aux.next.prev = aux;
          node1.child = aux;
      }
      node1.degree += 1
    }
  
    checkOnArray(aux,array){
      if(aux != null){
        if(array[aux.degree] == null){
          array[aux.degree] = aux;
          this.checkOnArray(aux.next,array);
        }else{
          let aux2 = array[aux.degree];
          array[aux.degree] = null;
          this.union(aux,aux2);
          if (array[aux.degree] != null){
            this.checkOnArray(aux,array);
          }else{
            array[aux.degree] = aux;
            this.checkOnArray(aux.next, array);
          }
        }
        /*if(aux.val < this.min.val){
          this.min = aux;
        }*/
      }
    }
    
    updateMin(node){
        while(node){
            if(node.val < this.min.val){
                this.min = node;
            }
            node = node.next
        }
    }
  
    consolidate(){
      let array = [this.cont];
      for(let i=0;i<this.cont;i++) array[i] = null;
      let aux = this.root;
      this.checkOnArray(aux,array);
      //console.log("ROO: "+this.root)
      //console.log("Hola")
        //this.printRaizMain(this.root)
        //console.log("Hola")
      this.min = this.root
      this.updateMin(this.root.next);
      //console.log("M: "+this.min)
    }
      
          
    printRaizMain(node){
      let aux = node;
      while (aux != null){
        console.log(aux.toString());
        this.printRaizMain(aux.child);
        aux = aux.next;
      }
    }
  
    printRoots(){
      if(this.root == None){
        console.log("None");
      }else{
        let aux = this.root;
        while(aux != null){
          console.log(aux);
          aux = aux.next;
        }
      }
    }
  
    small(){
      return this.min;
    }
      
  }

  export let fheap = new FHeap();