arr = [12, 13, 16, 19];
var new_arr = [];
var miss_arr_param = [];
var miss_arr_param_index = [];
for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    new_arr.push(i);
    if(!arr.includes(i)){
        miss_arr_param.push(i);
        var value = new_arr.indexOf(i);
        miss_arr_param_index.push(value);
    }
}
console.log('Missing Parameters:'+ miss_arr_param);
console.log('Missing Parameters Indexses:'+ miss_arr_param_index);
console.log('Complete Array:'+ new_arr);