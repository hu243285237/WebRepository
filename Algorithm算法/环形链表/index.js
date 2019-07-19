//////////////////////////////////////////////////////////////////////
//  
//  给定一个链表，判断链表中是否有环。
//
/////////////////////////////////////////////////////////////////////

// 创建链表节点的构造函数
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 创建链表
function creatList() {
    let listNode1 = new ListNode(3);
    let listNode2 = new ListNode(2);
    let listNode3 = new ListNode(0);
    let listNode4 = new ListNode(-4);
    
    listNode1.next = listNode2;
    listNode2.next = listNode3;
    listNode3.next = listNode4;
    listNode4.next = listNode2;

    return listNode1;
}

// 判断是否有环
function hasCycle(head) {
    if (head === null) {
        return false;
    }

    let temp1 = head;
    let temp2 = head;

    while (temp1.next !== null && temp2.next !== null && temp2.next.next !== null) {
        temp1 = temp1.next;
        temp2 = temp2.next.next;

        if (temp1 === temp2) {
            return true;
        }
    }

    return false;
};

let list = creatList();
console.log(hasCycle(list));