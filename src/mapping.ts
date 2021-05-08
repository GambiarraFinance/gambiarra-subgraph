import {
    Transfer as TransferEvent,
    Approval as ApprovalEvent
 } from '../generated/GambGov/GambGov'

import {
  Deposit as DepositSeverinoEvent,
  Withdraw as WithdrawEvent
} from "../generated/Severino/Severino";

import {
    Withdraw,
    DepositSeverino,
    Transfer,
    Approval
} from '../generated/schema'

export function handleDeposit(event: DepositSeverinoEvent): void {
    let deposit = new DepositSeverino(
        event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    )

    deposit.user = event.params.user
    deposit.pid = event.params.pid
    deposit.amount = event.params.amount

    deposit.save()
}


export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  withdraw.user = event.params.user;
  withdraw.pid = event.params.pid;
  withdraw.amount = event.params.amount;

  withdraw.save();
}

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.value = event.params.value;

  transfer.save();
}


export function handleApproval(event: ApprovalEvent): void {
  let approval = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  approval.owner = event.params.owner;
  approval.spender event.params.spender;
  approval.value = event.params.value;

  approval.save();
}