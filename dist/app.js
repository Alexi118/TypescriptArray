function setData() {
    return [
        { name: 'Nguyen Duc Cuong', code: 'B101', toan: 10, ly: 9, hoa: 8 },
        { name: 'Hoang Thanh Tu', code: 'B102', toan: 9, ly: 10, hoa: 10 },
        { name: 'Nguyen Quang Minh', code: 'B103', toan: 2, ly: 9, hoa: 7 },
        { name: 'Nguyen Hoang Giang', code: 'B104', toan: 8, ly: 10, hoa: 10 },
        { name: 'Do Huu Chi', code: 'B105', toan: 1, ly: 8, hoa: 1 }
    ];
}
function printArray(data) {
    var _tr = ``;
    for (let obj of data) {
        var avgMark = ((obj.toan + obj.ly + obj.hoa) / 3).toFixed(1);
        let ranking = '';
        if (avgMark < 5) {
            ranking = 'Yeu';
        }
        else if (avgMark >= 5 && avgMark < 6.5) {
            ranking = 'Trung Binh';
        }
        else if (avgMark >= 6.5 && avgMark < 8) {
            ranking = 'Kha';
        }
        else if (avgMark >= 8 && avgMark <= 9) {
            ranking = 'Gioi';
        }
        else if (avgMark > 9) {
            ranking = 'Xuat Sac';
        }
        _tr += `<tr>
        <th>
            <th>${obj.code}</th>
            <th>${obj.name}</th>
            <th>${obj.toan}</th>
            <th>${obj.ly}</th>
            <th>${obj.hoa}</th>
            <th>${avgMark}</th>
            <th>${ranking}</th>
        </th>
    </tr>`;
    }
    ;
    var tbody = document.getElementById('tbody-list');
    tbody.innerHTML = _tr;
}
let myData = setData();
printArray(myData);
let searching = (keyword) => {
    let searchbox = document.getElementById('searchbox');
    let myData = setData();
    let newData = myData.filter(function (obj1) {
        let avgMark = ((obj1.toan + obj1.ly + obj1.hoa) / 3).toFixed(1);
        return avgMark >= searchbox.value;
    });
    printArray(newData);
};
function sortByScore() {
    var sorting = document.getElementById('sortOption');
    if (sorting.value == 'asc') {
        let myData = setData();
        let sortData = myData.sort(function (a, b) {
            let avgMarkA = ((a.toan + a.ly + a.hoa) / 3);
            let avgMarkB = ((b.toan + b.ly + b.hoa) / 3);
            return avgMarkA < avgMarkB ? -1 : 0;
        });
        printArray(sortData);
    }
    else if (sorting.value == 'desc') {
        let myData = setData();
        let sortData = myData.sort(function (a, b) {
            let avgMarkA = ((a.toan + a.ly + a.hoa) / 3);
            let avgMarkB = ((b.toan + b.ly + b.hoa) / 3);
            return avgMarkA > avgMarkB ? -1 : 0;
        });
        printArray(sortData);
    }
    else {
        let myData = setData();
        printArray(myData);
    }
}
