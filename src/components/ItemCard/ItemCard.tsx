import { useDispatch } from 'react-redux'
import { updateItem, deleteItem } from '../../redux/features/Items'
import { Item } from '../../types/Item'
import { Card, CardHeader, CardBody, CardFooter, Button, TextInput, TextArea, Box } from 'grommet'
import { Trash } from 'grommet-icons'

export default function ItemCard({ item }: { item: Item }) {
  const dispatch = useDispatch()
  const editItemTitle = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(updateItem({ item: { ...item, title: event.target?.value ?? '' } }))
  const editItemDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(updateItem({ item: { ...item, description: event.target?.value ?? '' } }))
  const removeItem = () => dispatch(deleteItem({ id: item.id }))
  const onKeyboardBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.currentTarget.setSelectionRange(0, 0);
  }

  const onKeyboardKeyUp = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.setSelectionRange(0, 0);
      event.currentTarget.blur();
    }
  }

  return (
    <Box width={{ min: "small" }} height={{ min: 'small' }}>
      <Card width='small' height='small' >
        <CardHeader pad="small" >
          <TextInput
            plain
            placeholder='Title...'
            value={item.title}
            onChange={editItemTitle}
            onKeyUp={onKeyboardKeyUp}
            onBlur={onKeyboardBlur}
          />
        </CardHeader>
        <CardBody pad="small" >
          <TextArea
            onKeyUp={onKeyboardKeyUp}
            onBlur={onKeyboardBlur}
            onChange={editItemDescription}
            plain
            resize={false}
          >
            {item.description}
          </TextArea>
        </CardBody>
        < CardFooter pad={{ horizontal: "small" }
        } background="light-2" >
          <Button
            icon={<Trash />}
            hoverIndicator
            onClick={removeItem}
          />
        </CardFooter>
      </Card>
    </Box>
  )
}