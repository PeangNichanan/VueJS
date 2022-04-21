## Programmer
- Nichanan Chatuparisutisin 6210450571 sec200

## Requirement
```
Node.js
ถ้ายังไม่มี -> https://nodejs.org/en/
```
## Project setup (Install)
```
git clone https://github.com/PeangNichanan/VueJS.git
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## vue_assign01
- ตารางรายรับรายจ่ายมีค่าเงินเป็นบาท และมีการเรียงตามวันที่
- การเพิ่มข้อมูลสามารถเพิ่มได้ทางด้านขวาของ Webpage
    - การเพิ่มรายได้หรือรายจ่ายให้กรอกแค่อย่างใดอย่างหนึ่งเท่านั้น
- การแก้ไขข้อมูล
    - สามารถกดปุ่ม"แก้ไข"ตรงที่ต้องการ
    - เมื่อต้องการแก้ไขเพื่อเปลี่ยนแปลงจากรายได้เป็นรายจ่าย หรือ รายจ่ายเป็นรายได้ ต้องแก้ไขอีกค่าเป็น 0
        - เช่น รายได้ = 100 ต้องการเปลี่ยนเป็นข้อมูลรายจ่ายต้องแก้ไขเป็น รายได้ = 0 ด้วยจึงจะแก้ไขรายจ่ายได้
    - เมื่อแก้ไขเสร็จแล้วให้กด"ยืนยัน"เพื่อรับการแก้ไข หรือ กด"ยกเลิก"เพื่อไม่รับการแก้ไข

