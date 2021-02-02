import React, { useState,useEffect } from 'react';
import './App.css';
import TodoInput from './components/Input/TodoInput';
import TodoList from './components/Items/TodoList';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

const initialState = localStorage.getItem('todoapplist') ? 
                    JSON.parse(localStorage.getItem('todoapplist')) : 
                    [];

console.log(initialState);

const App = () => {

  // -->Start<--- *Declaration of States*
  const [data, setDataState] = useState(initialState);
  const [note, setNote] = useState('');
  const [editable, setEditable] = useState(false);
  const [editId, setEditId] = useState(0);

  console.log(data);
  // -->End<--- *Declaration of States*

  // -->Start<-- *Deaclaration of Functions*

  const handleNote = (e) => {
    setNote(e.target.value);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (note !== "") {

      // Part Section of Edit Action
      if (editable) {
        let tempData = data.map(item => {
          return item.id === editId ? { ...item, note } : item
        });

        setDataState(tempData);
        setEditable(false);
        toast.info('Edited one item');
      }
      // Part Section of Add Action
      else {
        let datas = { id: uuidv4(), note };
        console.log(datas);

        setDataState([...data, datas]);

        toast.success('Added a new item');
      }

      setNote('');

    }
    else {
      toast.warning('Please to fill field');
    }

  }

  const allClearItem = () => {
    console.log('yes sir');
    setDataState([]);
    setNote('');
    setEditable(false);
    toast.success('Clear all item');
  }

  const deletedItem = (id) => {

    console.log(`Deleted Item yes sir`);
    let selectElem = data.find(item => item.id === id);
    let { note } = selectElem;

    console.log(note);

    swal({
      title: "Are you sure?",
      text: "You want to delete " + note.toString().toUpperCase() + " " + "item",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let newList = data.filter(item => item.id !== id);
          setDataState(newList);
          setEditable(false);
          setNote('');
          console.log(newList);
          swal("Deleted " + note.toString().toUpperCase() + " " + "item", {
            icon: "success",
          });
        }
      });
  }

  const handleEdit = (id) => {
    console.log(`Yeah Man`);
    let editElem = data.find(item => item.id === id);
    let { note } = editElem;
    setNote(note);
    setEditable(true);
    setEditId(id);
  }


  // -->End<-- *Deaclaration of Functions*

  // -->Start<-- *Lifecycle Method with UseEffect*
    
   useEffect(() => {
     localStorage.setItem('todoapplist',JSON.stringify(data));
   }, [data])


  // -->End<-- *Lifecycle Method with UseEffect*


  return (
    <div className="App">

      <TodoInput
        note={note}
        handleNote={handleNote}
        handleSubmit={handleSubmit}
        editable={editable}
      />
      <TodoList
        datas={data}
        allClearItem={allClearItem}
        deletedItem={deletedItem}
        handleEdit={handleEdit}
      />

      <ToastContainer
        autoClose={2000}
        position="bottom-right"
      />
    </div>
  );
}

export default App;
