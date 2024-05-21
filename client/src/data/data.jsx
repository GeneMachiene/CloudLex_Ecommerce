export const data = [
  {
    name: 'John',
    age: 30,
    sex: 'Male',
    address: '3 Termanry street',
    account_id: '2jvboodfnej4',
    type: 'User'
  },
  {
    name: 'Sara',
    age: 25,
    sex: 'Female',
    address: '3 Random Road',
    account_id: '3hfenogfema3',
    type: 'Admin'
  },
  {
    name: 'Michael',
    age: 28,
    sex: 'Male',
    address: '7 Oak Lane',
    account_id: '5gkrnf38ns',
    type: 'User'
  },
  {
    name: 'Emily',
    age: 32,
    sex: 'Female',
    address: '12 Maple Street',
    account_id: '9jsm4l5ns9',
    type: 'Admin'
  },
  {
    name: 'Daniel',
    age: 35,
    sex: 'Male',
    address: '18 Elm Avenue',
    account_id: '3osk4mr87s',
    type: 'User'
  },
  {
    name: 'Sophia',
    age: 27,
    sex: 'Female',
    address: '5 Pine Court',
    account_id: '7mj42l9dn3',
    type: 'Admin'
  },
  {
    name: 'Matthew',
    age: 29,
    sex: 'Male',
    address: '22 Cedar Lane',
    account_id: '4nsmg93djf',
    type: 'User'
  },
  {
    name: 'John',
    age: 30,
    sex: 'Male',
    address: '3 Termanry street',
    account_id: '2jvboodfnej4',
    type: 'User'
  },
  {
    name: 'Sara',
    age: 25,
    sex: 'Female',
    address: '3 Random Road',
    account_id: '3hfenogfema3',
    type: 'Admin'
  },
  {
    name: 'Michael',
    age: 28,
    sex: 'Male',
    address: '7 Oak Lane',
    account_id: '5gkrnf38ns',
    type: 'User'
  },
  {
    name: 'Emily',
    age: 32,
    sex: 'Female',
    address: '12 Maple Street',
    account_id: '9jsm4l5ns9',
    type: 'Admin'
  },
  {
    name: 'Daniel',
    age: 35,
    sex: 'Male',
    address: '18 Elm Avenue',
    account_id: '3osk4mr87s',
    type: 'User'
  },
  {
    name: 'Sophia',
    age: 27,
    sex: 'Female',
    address: '5 Pine Court',
    account_id: '7mj42l9dn3',
    type: 'Admin'
  },
  {
    name: 'Matthew',
    age: 29,
    sex: 'Male',
    address: '22 Cedar Lane',
    account_id: '4nsmg93djf',
    type: 'User'
  },
  {
    name: 'Olivia',
    age: 31,
    sex: 'Female',
    address: '9 Birch Street',
    account_id: '8shdnef84m',
    type: 'Admin'
  },
  {
    name: 'Christopher',
    age: 33,
    sex: 'Male',
    address: '16 Pine Lane',
    account_id: '6kfm38dnek',
    type: 'User'
  },
  {
    name: 'Emma',
    age: 26,
    sex: 'Female',
    address: '28 Oak Street',
    account_id: '5msh8dng4l',
    type: 'Admin'
  },
  {
    name: 'Adam',
    age: 25,
    sex: 'Male',
    address: '15 Oak Street',
    account_id: '5gkrnf38ns',
    type: 'User'
  },
  {
    name: 'Eva',
    age: 30,
    sex: 'Female',
    address: '10 Maple Avenue',
    account_id: '9jsm4l5ns9',
    type: 'Admin'
  },
  {
    name: 'Lucas',
    age: 35,
    sex: 'Male',
    address: '8 Elm Road',
    account_id: '3osk4mr87s',
    type: 'User'
  },
  {
    name: 'Isabella',
    age: 28,
    sex: 'Female',
    address: '3 Pine Lane',
    account_id: '7mj42l9dn3',
    type: 'Admin'
  },
  {
    name: 'Noah',
    age: 32,
    sex: 'Male',
    address: '20 Cedar Avenue',
    account_id: '4nsmg93djf',
    type: 'User'
  },
  {
    name: 'Olivia',
    age: 27,
    sex: 'Female',
    address: '12 Birch Street',
    account_id: '8knm34pl9d',
    type: 'Admin'
  },
  {
    name: 'Liam',
    age: 29,
    sex: 'Male',
    address: '18 Pine Road',
    account_id: '2okm4pg39j',
    type: 'User'
  },
  {
    name: 'Charlotte',
    age: 33,
    sex: 'Female',
    address: '5 Elm Lane',
    account_id: '6m3p9ldns4',
    type: 'Admin'
  },
  {
    name: 'Mason',
    age: 26,
    sex: 'Male',
    address: '25 Cedar Street',
    account_id: '3k9pldmr4s',
    type: 'User'
  },
  {
    name: 'Amelia',
    age: 31,
    sex: 'Female',
    address: '17 Maple Road',
    account_id: '5mp9k3lndr',
    type: 'Admin'
  },
];

export const res = fetch(`${process.env.REACT_APP_API_URL}/all-users`, {
  method: "GET",
  credentials: "include",
}).then(result => result.json());
