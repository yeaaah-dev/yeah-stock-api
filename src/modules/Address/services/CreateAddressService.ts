import { addressRepository } from "../repositories/addressRepository"

class CreateAddressService {
    async execute(input: any): Promise<void>  {
        
        const addressAlredyExists = await addressRepository.findOne({
            where: {
                street: input.neighborhood,
                neighborhood: input.neighborhood,
                city: input.neighborhood,
                country: input.neighborhood,
                code: input.neighborhood,
            }
        });

        if (addressAlredyExists) throw new Error("Address Alredy Exists!");

        addressRepository.create(input);
        await addressRepository.save(input);
    }
}

export { CreateAddressService }