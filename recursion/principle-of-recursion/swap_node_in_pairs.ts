class ListNode {
    constructor(val?: number, next?: ListNode | null) {
        this._val = (val === undefined ? 0 : val)
        this._next = (next === undefined ? null : next)
    }

    private _val: number

    get val(): number {
        return this._val;
    }

    set val(value: number) {
        this._val = value;
    }

    private _next: ListNode | null

    get next(): ListNode | null {
        return this._next;
    }

    set next(value: ListNode | null) {
        this._next = value;
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) return null;
    const nextNode = head.next;
    let nextHead = nextNode?.next;

    if (!nextNode) return head;
    if (!nextHead) nextHead = null;

    if (nextHead) nextHead = swapPairs(nextHead);

    nextNode.next = head;
    head.next = nextHead;

    return nextNode;
}