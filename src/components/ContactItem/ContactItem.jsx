import { Button } from 'components/Button/Button';
export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <li style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '16px' }}> {name}</p>
        <p style={{ fontSize: '16px' }}> {number}</p>
        <Button onClick={() => deleteContact(id)}>Delete</Button>
      </li>
    </>
  );
};
