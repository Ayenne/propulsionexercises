function two_sum(nums){
    let winners = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            if (nums[i] + nums[j] === 0){
                winners.push([i,j]);
            }
        }
    }
    if(winners.length === 0){
        return 'null';
    }else{
        return winners;
    }
}
console.log(two_sum([1,5,-1,3,-4]));