//ช้อ 4

var firstvariable = "Hello";
var secondvariable = "world";

//regex สามารถใช้เพื่อค้นหา, แก้ไข และจัดการข้อความ
//กำหนดรูปแบบที่เราต้องการให้ RegEx หาให้
var regExString = new RegExp("(?:" + firstvariable + ")((.[\\s\\S]*))(?:" + secondvariable + ")", "ig");

// เรียกใช้ RegEx โดยส่งค่าข้อความเข้าไป
var testRE = regExString.exec("Peter Hello Thank you world Pan");

// Check ว่ามีผลลัพธ์หรือไม่
if (testRE && testRE.length > 1) {
    console.log(testRE[1]); //แสดงค่าผลลัพธ์โดยจะรีเทริน์ค่ากลับมาเป็น  array 
}

// testRE[0] = Hello Thank you world
// testRE[1] = Thank you
// testRE[2] = Thank you
//สามารถใช้วิธีอื่นได้เช่นการใช้ substring() method 
