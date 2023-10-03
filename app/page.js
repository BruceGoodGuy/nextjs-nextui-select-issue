"use client"
import {Select, SelectItem} from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Home() {
  const animals = [
    {label: 'Dog', value: "Dog"},
    {label: 'Cat', value: "Cat"},
    {label: 'Chicken', value: 'Chicken'},
    {label: 'Tiger', value: 'Tiger'},
    {label: 'Lion', value: 'Lion'},
    {label: 'Bird', value: 'Bird'}
  ];

  const [data, setData] = useState(["Cat"]);

  const getSelectedAnimal = async () => {
    let animal = await fetch('http://localhost:3000/test');
    animal = await animal.json();
    setData([animal.data]);
  }

  useEffect(function() {
    getSelectedAnimal();
  }, []);
  return (
    <main className="flex min-h-screen flex-col">
      <h3>You're selected: {data}</h3>
      <div className='w-25 p-5'>
        <Select
            radius="none"
            label="Favorite Animal"
            placeholder="Select an animal"
            defaultSelectedKeys={data}
            className="max-w-[45%]"
          >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </main>
  )
}
