let arr = [];

window.onload = function ()
      {
        DisplayTable(arr);
      }

function changeTab(event, tabName) {
  let i, tabcontent, list_item;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  list_item = document.getElementsByClassName("list-item");
  for (i = 0; i < list_item.length; i++) {
    list_item[i].className = list_item[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function searchItem()
      {
        let input, filter,j=0;
        let searchresult = [];
        input = document.getElementById("search-bar-id");
        filter = input.value;
        for(let i=0;i<arr.length;i++)
        {
          if(arr[i].includes(filter))
          {
            searchresult[j] = arr[i];
            j++;
          }
        }
        input.value="";
        DisplayTable(searchresult);
      }

function DisplayTable(array)
      {
        let table = document.getElementById("task-table");
        table.innerHTML='';
        for(let i=0;i<array.length;i++)
        {
           let row = table.insertRow(i);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);
           let ebtn = "edit-button";
           let rbtn = "remove-button";
           let editOnClick="editItem(this)";
           let deleteOnClick ="deleteItem(this)";
           cell2.innerHTML =`<button class=${ebtn} onclick=${editOnClick}></button>`;
           cell3.innerHTML =`<button class=${rbtn} onclick=${deleteOnClick}></button>`;
           cell1.innerHTML = array[i];

        }
      }

      function deleteItem(element)
      {
        let row = element.parentNode.parentNode;
        let rowcontent = row.firstChild.innerHTML;
        let index = arr.indexOf(rowcontent);
        if (index > -1)
        {
          arr.splice(index, 1);
        }
        var table = document.getElementById ("task-table");
        DisplayTable(arr);
      }

      function addItem()
      {
        let input, filter;
        input = document.getElementById("search-bar-id");
        filter = input.value;
        if(!arr.includes(filter) && filter.length!=0)
        {
          arr.push(filter);
        }
        else
        {
            alert("Duplicate or null entry!!");
        }
        let table = document.getElementById ("task-table");
        input.value="";
        DisplayTable(arr);
      }

      function editItem(element)
      {
        let row = element.parentNode.parentNode;
        let rowcontent = row.firstChild.innerHTML;
        let ubtn = "update-button";
        let index = arr.indexOf(rowcontent);
        row.innerHTML=`<td><input type='text' id='edit' value=${rowcontent}></td><td><button class='${ubtn}' onclick=updateItem(this,${index})></button></td> `;
      }
      function updateItem(element,index)
      {
        let rowcontent=element.parentNode.parentNode.firstChild.firstChild.value;
        if(!arr.includes(rowcontent) && rowcontent.length!=0)
        {
          arr[index] = rowcontent;
        }
        else
        {
            alert("Duplicate or null entry!!");
        }
        DisplayTable(arr);
      }