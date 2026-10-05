
const users = [
  { id: 1, name: 'Alice', role: 'admin', active: true },
  { id: 2, name: 'Bob', role: 'user', active: false },
  { id: 3, name: 'Charlie', role: 'user', active: true },];


const activeUserNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log('Active Users:', activeUserNames); 

async function fetchPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error(`Status: ${response.status}`);
    
    const data = await response.json();
    console.log('Fetched Post:', data.title);
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

fetchPost(1);



class BankAccount {
  #balance;  

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) return 'Deposit amount must be positive.';
    this.#balance += amount;
    return `Deposited $${amount}. New balance: $${this.#balance}`;
  }

  getBalance() {
    return `Account balance for ${this.owner}: $${this.#balance}`;
  }
}

const account = new BankAccount('Alex', 100);
console.log(account.deposit(50));  
console.log(account.getBalance());  