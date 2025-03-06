declare namespace ComponentProps {
   export type Users = {
    id?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar?: string;
    job?: string;
    }

    export type UsersListProps = {
        users: Users[];
        setUsers: React.Dispatch<React.SetStateAction<Users[]>>
      };
      
      export type CreateUserFormProps = {
        setUsers: React.Dispatch<React.SetStateAction<Users[]>>
      };
      export type UserModalProps = {
        user: ComponentProps.Users | null;
        onClose: () => void;
        onSave: (updatedUser: ComponentProps.Users) => void;
      }     
}