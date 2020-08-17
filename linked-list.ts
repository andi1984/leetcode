import { exit } from "process";

interface LinkListNode {
  val?: number;
  next?: LinkListNode;
}

class MyLinkedList {
  head: LinkListNode;

  constructor() {
    this.head = null;
  }

  *listIterator(
    startFromIndex: number = 0
  ): Generator<LinkListNode, any, LinkListNode> {
    let index = 0;
    let listHead: LinkListNode = this.head;
    while (!!listHead) {
      if (startFromIndex <= index) {
        yield listHead;
      }
      listHead = listHead.next;
      index = index + 1;
    }
  }

  log(): string {
    if (!this.head) {
      return "";
    }

    const iterator = this.listIterator();

    let curNode = iterator.next();
    let listAsString = "";

    while (!curNode.done) {
      listAsString = listAsString + "-" + curNode.value.val;
      curNode = iterator.next();
    }

    return listAsString;
  }

  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (!this.head) {
      return -1;
    }

    const iterator = this.listIterator(index);

    const resultNode = iterator.next().value;

    return !!resultNode ? resultNode.val : -1;
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {
    const currentHead = this.head;
    const newHeadNode = {
      val,
      next: currentHead,
    };
    this.head = newHeadNode;
  }
  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {
    if (!this.head) {
      return;
    }

    const iterator = this.listIterator();
    let curNode,
      nextNode = iterator.next();

    while (!nextNode.done) {
      curNode = nextNode;
      nextNode = iterator.next();
    }

    curNode.value.next = {
      val,
      next: undefined,
    };
  }
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked @list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {
    const iterator = this.listIterator(index - 1);

    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    const nodeAtIndexBefore = iterator.next();
    const nodeAtIndex = iterator.next();

    // It's the end of the list
    if (nodeAtIndex.done || nodeAtIndexBefore.done) {
      this.addAtTail(val);
    } else {
      nodeAtIndexBefore.value.next = {
        val,
        next: nodeAtIndex.value,
      };
    }
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    // Trying to delete the first entry
    if (index === 0) {
      if (!!this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
    } else {
      const iterator = this.listIterator(index - 1);
      const nodeAtIndexBefore = iterator.next();
      const _ = iterator.next();
      const nodeAtIndexAfter = iterator.next();
      if (!nodeAtIndexBefore.done) {
        nodeAtIndexBefore.value.next = nodeAtIndexAfter.done
          ? null
          : nodeAtIndexAfter.value;
      }
    }
  }
}

module.exports = MyLinkedList;
