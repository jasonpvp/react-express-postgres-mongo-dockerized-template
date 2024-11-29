// import * as styles from './Test.module.css'
import { Button, Box } from 'grommet'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { createItem } from '../../redux/features/Items'
import ItemCard from '../ItemCard'

export default function Test() {
  const items = useSelector((state: RootState) => state.items.items)
  const dispatch = useDispatch()
  const add = () => dispatch(createItem({ title: 'testing' }))

  return (
    <div>
      <Button
        label="Add item"
        onClick={add}
      />
      <Box fill overflow='scroll' direction='row' gap='large'>
        {Object.values(items).map((item) => (<ItemCard key={item.id} item={item} />))}
      </Box>
    </div>
  )
}