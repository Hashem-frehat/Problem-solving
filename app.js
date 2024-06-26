class first {
    constructor() {
      this.items = [];
    }
    push(element) {
        this.items.push(element);
      }

      pop() {
        if (this.items.length === 0) {
          return "0";
        }
        return this.items.pop();
      }

      revers_arr(arr, obj_arr) {

        for (let i = 0; i <= arr.length - 1; i++) {
            obj_arr.push(arr[i]);
            
        }

        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = obj_arr.pop();
            console.log(arr)
        }

        return arr;
    }


    }
    let newfirst = new first();
    let x = [1,2,3,4,5,6,7,8,9];
    newfirst.revers_arr(x,newfirst);
  
   
console.log(x);    ;



// q3-----------------------------------------------------------------
function sumArray(arr,cur) {
   
    if (arr.length <= cur) {
        return 0;
    }

   
    return arr[cur] + sumArray(arr,cur+1);
}

// Example usage:
let array = [1, 2, 3, 4, 5];
let result = sumArray(array,0);
console.log("Sum of array:", result); // Output: 15



// -------------------------------------------
class aa {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let newaa = new aa(data);
        if (this.head === null) {
            this.head = newaa;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newaa;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
}
function reverseLinkedList(ll) {
    let prev = null;
    let current = ll.head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev; 
        prev = current;     
        current = next;    
    }

    ll.head = prev; 
}

// Example usage:
let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

ll.printList();

reverseLinkedList(ll);


ll.printList();