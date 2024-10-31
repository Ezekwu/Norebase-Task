"use client"
import { useMemo } from "react";

export interface Header {
  title: string;
  query: string;
}

export interface Row extends Record<string, any> {
  id: string;
}

interface Props {
  headers: Header[];
  data: Row[]
}

export default function UiTable({data, headers}: Props) {

  const MobileTable = useMemo(()=>{
    return (
      <div className="sm:hidden">
        {data.map((item , index)=>(
          <div  className={`grid grid-cols-2 gap-3 p-2 ${index % 2 !== 0 ? 'bg-gray-300': 'bg-white'}`} key={item.id}>
            {headers.map((header, index) => (
              <div key={`mobile-headers${index}`}>
                <h3 className="font-bold">{header.title}</h3>
                <p>{item[header.query]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }, [data])

  return (
    <div>
      <table className="hidden sm:block text-left bg-white">
        <thead>
          <tr className="">
            {headers.map((header, index)=>(
              <th key={`table-headers${index}`} className="sm:px-4 lg:px-8 py-1 text-nowrap">{header.title}</th>
            ))}
          </tr> 
        </thead>
        <tbody>
          {data.map((item, index)=>(
            <tr className={`${index % 2 === 0 && 'bg-gray-300'}`} key={item.id}>
              {headers.map((header, index)=>(
                <td key={`table-header${index}`} className="md:px-4 lg:px-8 py-1 text-nowrap">{item[header.query]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {MobileTable}
    </div>
  )
}