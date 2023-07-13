function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};
var data1 = new ListNode(0);
const l1 = data1;
data1.next = new ListNode(1);
data1 = data1.next;
data1.next = new ListNode(3);
data1 = data1.next;
data1.next = new ListNode(2);
data1 = data1.next;

var data2 = new ListNode(0);
const l2 = data2;
data2.next = new ListNode(3);
data2 = data2.next;
data2.next = new ListNode(9);
data2 = data2.next;
data2.next = new ListNode(1);
data2 = data2.next;
console.log(addTwoNumbers(l1.next, l2.next));
