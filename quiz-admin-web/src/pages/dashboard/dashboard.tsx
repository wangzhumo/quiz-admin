import ChartComponent from '@/pages/dashboard/dailyRequest'
import { AiOutlineRise } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import type { TableProps } from 'antd'
import { Table } from 'antd'

interface DataType {
  key: string
  uid: string
  name: string
  participant: string
  cost: string
  result: string[]
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Quiz Id',
    dataIndex: 'uid',
    key: 'uid',
    render: text => <span>{text}</span>
  },
  {
    title: 'Quiz Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>
  },
  {
    title: 'Participant',
    dataIndex: 'participant',
    key: 'participant',
    render: text => <span>{text}</span>
  },
  {
    title: 'Cost Time',
    dataIndex: 'cost',
    key: 'cost',
    render: text => <span>{text}</span>
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
    render: text => <span>{text}</span>
  }
]
// AiOutlineFall
function Dashboard() {
  const data: DataType[] = [
    {
      key: '63435',
      uid: '63435',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    },
    {
      key: '4541',
      uid: '4541',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    },
    {
      key: '2313',
      uid: '2313',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    },
    {
      key: '1111',
      uid: '1111',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    },
    {
      key: '222',
      uid: '222',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    },
    {
      key: '123123',
      uid: '123123',
      name: 'John Brown',
      participant: '31111112',
      cost: 'New York No. 1 Lake Park',
      result: ['nice', 'developer']
    }
  ]
  return (
    <div className='flex flex-col  p-7'>
      <span className='text-3xl font-medium'>Dashboard</span>
      <div className='flex justify-between gap-10 mt-5'>
        <div className='stat bg-white rounded-2xl gap-4'>
          <div className='stat-title text-md text-gray-500'>Total User</div>
          <div className='stat-figure h-full text-blue-400'>
            <div className='w-16 h-16 rounded-3xl bg-blue-100 flex  justify-center	 items-center	'>
              <FaUsers size={32} />
            </div>
          </div>
          <div className='stat-value font-medium text-3xl'>40,689</div>
          <div className='stat-desc text-gray-500  flex-row flex gap-1 content-center items-center '>
            <AiOutlineRise color={'rgb(34 197 94 / var(--tw-text-opacity))'} />
            <span className='text-green-500 inline-block'>8.5%</span>
            <span>from yesterday</span>
          </div>
        </div>

        <div className='stat bg-white rounded-2xl gap-4'>
          <div className='stat-title text-md text-gray-500'>Total User</div>
          <div className='stat-figure h-full text-blue-400'>
            <div className='w-16 h-16 rounded-3xl bg-blue-100 flex  justify-center	 items-center	'>
              <FaUsers size={32} />
            </div>
          </div>
          <div className='stat-value font-medium text-3xl'>40,689</div>
          <div className='stat-desc text-gray-500  flex-row flex gap-1 content-center items-center '>
            <AiOutlineRise color={'rgb(34 197 94 / var(--tw-text-opacity))'} />
            <span className='text-green-500 inline-block'>8.5%</span>
            <span>from yesterday</span>
          </div>
        </div>

        <div className='stat bg-white rounded-2xl gap-4'>
          <div className='stat-title text-md text-gray-500'>Total User</div>
          <div className='stat-figure h-full text-blue-400'>
            <div className='w-16 h-16 rounded-3xl bg-blue-100 flex  justify-center	 items-center	'>
              <FaUsers size={32} />
            </div>
          </div>
          <div className='stat-value font-medium text-3xl'>40,689</div>
          <div className='stat-desc text-gray-500  flex-row flex gap-1 content-center items-center '>
            <AiOutlineRise color={'rgb(34 197 94 / var(--tw-text-opacity))'} />
            <span className='text-green-500 inline-block'>8.5%</span>
            <span>from yesterday</span>
          </div>
        </div>

        <div className='stat bg-white rounded-2xl gap-4'>
          <div className='stat-title text-md text-gray-500'>Total User</div>
          <div className='stat-figure h-full text-blue-400'>
            <div className='w-16 h-16 rounded-3xl bg-blue-100 flex  justify-center	 items-center	'>
              <FaUsers size={32} />
            </div>
          </div>
          <div className='stat-value font-medium text-3xl'>40,689</div>
          <div className='stat-desc text-gray-500  flex-row flex gap-1 content-center items-center '>
            <AiOutlineRise color={'rgb(34 197 94 / var(--tw-text-opacity))'} />
            <span className='text-green-500 inline-block'>8.5%</span>
            <span>from yesterday</span>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-2xl h-auto mt-6 p-8'>
        <div className='flex justify-between	items-center'>
          <span className='font-medium inline-block text-xl'>
            Quizzes Request
          </span>
        </div>
        <ChartComponent />
      </div>
      <div className='bg-white rounded-2xl h-auto mt-6 p-8'>
        <div className='flex justify-between	items-center '>
          <span className='font-medium inline-block text-xl'>
            Quizzes Details
          </span>
        </div>
        <div className='overflow-x-auto mt-6'>
          <Table columns={columns} dataSource={data} ></Table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
