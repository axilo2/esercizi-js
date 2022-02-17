class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError(); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(message) {
    super.message = message;
    this.name = "NegativeAmountError";
  }
}

class WithdrawNotPermittedError extends Error{
  constructor(message) {
    super.message = message;
    this.name = "WithdrawNotPermittedError";
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}