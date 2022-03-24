คำสั่ง alert ในแต่ละบรรทัดจะแสดงค่าเป็นอะไรบ้าง

```js
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || (2 && 3) || 4);
```

2
1
2
null
1
undefined
3
