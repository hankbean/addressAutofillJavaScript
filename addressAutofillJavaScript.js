1
javascript:(function () { var f1 = window.frames[0];var inputaddrno = f1.document.getElementsByName('addrno')[0]; inputaddrno.value = '402號'; var event = new Event('change'); inputaddrno.dispatchEvent(event); })();

2
javascript:(function () { var f1 = window.frames[0]; var input_addrfloor = f1.document.getElementsByName('addrfloor')[0]; input_addrfloor.value = '01樓';  var event2 = new Event('change'); input_addrfloor.dispatchEvent(event2); })();

3
javascript:(function () { var f1 = window.frames[0]; f1.document.getElementsByName('sender')[0].value = '中華郵政'; f1.document.getElementsByName('senderlist')[0].value = '中華郵政'; f1.document.getElementsByName('type')[0].value = '平信'; f1.document.getElementsByName('location')[0].value = '收發前台'; })();