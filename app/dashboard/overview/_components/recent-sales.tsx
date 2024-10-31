import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Buyer</p>
          <p className="text-sm text-muted-foreground">
            0x12D45a8BcF75E34F529BC0d58FA2EfE12ab12CD3
          </p>
        </div>
        <div className="ml-auto font-medium">+245.67 ETH</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Buyer</p>
          <p className="text-sm text-muted-foreground">
            0xF29AB37C6aB7cEC1aA67F05A68A6B5D6B5F890eD
          </p>
        </div>
        <div className="ml-auto font-medium">+1,056.98 ETH</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Buyer</p>
          <p className="text-sm text-muted-foreground">
            0xA7dC8DfD98EF1e5B8cA4E55a5D82FfEf5cD1B7E9
          </p>
        </div>
        <div className="ml-auto font-medium">+732.42 ETH</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Buyer</p>
          <p className="text-sm text-muted-foreground">
            0x9BfD91c4B53cE8D7a7B1bCc5d7Ee3E8Db94fEdC9
          </p>
        </div>
        <div className="ml-auto font-medium">+4,500.12 ETH</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Buyer</p>
          <p className="text-sm text-muted-foreground">
            0xB1F2cA07b9C5A3C8eF9B1c07E1f3B6D5E6B8aF0D
          </p>
        </div>
        <div className="ml-auto font-medium">+2,320.87 ETH</div>
      </div>
    </div>
  );
}
