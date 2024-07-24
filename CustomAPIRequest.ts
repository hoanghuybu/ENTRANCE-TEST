export interface Root {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}

const getUserDetail = async () => {
  try {
    const response = await api<Root>(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const name = response.name;
    const address = `Street ${response?.address?.street}, Suite  ${response?.address?.suite}, City: ${response?.address?.city}`;
    const phoneNumber = response?.phone;
    console.log("Name: ", name);
    console.log("Address: ", address);
    console.log("Phone Number: ", phoneNumber);
  } catch (error) {
    console.log(error);
  }
};

getUserDetail();
