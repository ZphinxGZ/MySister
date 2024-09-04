document.addEventListener("DOMContentLoaded", () => {
    // สิ่งที่ไม่ต้องเปลี่ยนค่าบ่อยๆ
  document.getElementById("shop-name").innerHTML = data[0].shopname;
  document.getElementById("shop-address").innerHTML = data[0].shopAddress;
  document.getElementById("shop-phone").innerHTML = data[0].shopPhone;
  document.getElementById("shop-gstin").innerHTML = data[0].shopGstin;
  document.getElementById("shop-invoiceNo").innerHTML = data[0].shopInvoiceNo;

  document.getElementById("bill-name").innerHTML = data[1].billName;
  document.getElementById("bill-address").innerHTML = data[1].billAddress;
  document.getElementById("bill-phone").innerHTML = data[1].billPhone;
  document.getElementById("bill-orderNo").innerHTML = data[1].billOrderNo;
  document.getElementById("bill-method").innerHTML = data[1].billMethod;
  document.getElementById("bill-warrenty").innerHTML = data[1].billWarrenty;

  document.getElementById("account-name").innerHTML = data[2].accountName;
  document.getElementById("account-number").innerHTML = data[2].accountNumber;
  document.getElementById("ifsc-code").innerHTML = data[2].ifscCode;
  document.getElementById("payment-mode").innerHTML = data[2].paymentMode;
  document.getElementById("reference-no").innerHTML = data[2].referenceNo;

    // ตัวแปร เก็บค่าจร้าา
  const tbody = document.getElementById("product-table-body");
  const totalElement = document.getElementById("total");


  let total = 0;
  products.forEach((product) => {
    const rowTotal = product.qty * product.price;
    total += rowTotal;
    //สร้างตาราง
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.seNo}</td>
        <td>${product.goodsDescription}</td>
        <td>${product.hsn}</td>
        <td>${product.qty}</td>
        <td>${product.price}</td>
        <td>${rowTotal}</td>
    `;
    tbody.appendChild(row);
  });
   //ผลรวมทั้งหมด
  totalElement.innerHTML = `฿${total.toFixed(2)}`;
});
