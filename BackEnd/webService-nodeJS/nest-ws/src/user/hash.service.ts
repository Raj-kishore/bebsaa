import {
    Injectable
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
    async hashPassword(password: string) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async comparePassword(password: string, hash) {
        return await bcrypt.compare(password, hash)
    }
}

//PS
//The above code will create a hash password to ensure secure application authentication. Now create a service to execute the user.
