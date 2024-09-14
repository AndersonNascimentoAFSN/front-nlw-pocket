import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";

export  function RegisterGoalButton() {
  return (
    <DialogTrigger asChild>
    <Button
      type="button"
      size="sm"
    >
      <Plus className='size-4 text-violet-50' />
      Cadastrar meta
    </Button>
  </DialogTrigger>
  )
}
