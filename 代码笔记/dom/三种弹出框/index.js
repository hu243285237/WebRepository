//////////////////////////////////////////////////////////////////
//
//  alert
//
//  警告消息框
//
//  alert 方法有一个参数，即希望对用户显示的文本字符串
//
//  该消息框提供了一个 “确定” 按钮让用户关闭该消息框，并且该消息框是模式对话框
//  
//  也就是说，用户必须先关闭该消息框然后才能继续进行操作
//
//////////////////////////////////////////////////////////////////

alert("It is alert");

//////////////////////////////////////////////////////////////////
//
//  comfirm
//
//  确认消息框
//
//  使用确认消息框可向用户问一个 “是-或-否” 问题，并且用户可以选择单击 “确定” 按钮或者单击 “取消” 按钮
//
//  confirm 方法的返回值为 true 或 false
//
//  用户必须在响应该对话框（单击一个按钮）将其关闭后，才能进行下一步操作
//
//////////////////////////////////////////////////////////////////

if (confirm("Everythings just wondeful?")) {
    alert("yes");
} else {
    alert("no");
}

//////////////////////////////////////////////////////////////////
//
//  prompt
//
//  提示消息框
//
//  提示消息框提供了一个文本字段，用户可以在此字段输入一个答案来响应您的提示
//
//  该消息框有一个 “确定” 按钮和一个 “取消” 按钮
//
//  如果用户单击提示框的取消按钮，则返回 null，如果用户单击确认按钮，则返回输入字段当前显示的文本
//
//  如果您提供了一个辅助字符串参数，则提示消息框将在文本字段显示该辅助字符串作为默认响应，否则，默认文本为 "<undefined>"
//
//  与 alert 和 confirm 方法类似，prompt 方法也将显示一个模式消息框，用户在继续操作之前必须先关闭该消息框
//
//////////////////////////////////////////////////////////////////

alert(prompt("hello?", "please write your name in here"));