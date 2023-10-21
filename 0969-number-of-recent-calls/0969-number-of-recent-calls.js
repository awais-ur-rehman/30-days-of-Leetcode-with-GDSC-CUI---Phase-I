var RecentCounter = function() {
    // Initialize an empty queue to store timestamps.
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // Add the current timestamp to the queue.
    this.queue.push(t);
    
    // Remove timestamps that are outside the time frame [t - 3000, t].
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    
    // The length of the queue now represents the number of requests in the time frame.
    return this.queue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
