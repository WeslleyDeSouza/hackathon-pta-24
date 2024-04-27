import {Column, Entity} from "typeorm";

@Entity()
export abstract class TenantBaseEntity {
  protected self:typeof TenantBaseEntity = TenantBaseEntity

  @Column({
    type:"int",
    unsigned:true,
    nullable:false
  })
  tenantId: number;

  protected async setLastEntryId(key: string): Promise<number> {

    const _db = this.self as any;
    const lastEntry = await _db.find({
      withDeleted: true,
      order: {
        [key]: 'DESC',
      },
      where: { tenantId: this.tenantId },
      take: 1,
    });
    // @ts-ignore
    this[key] = lastEntry && lastEntry[0] ? +lastEntry[0][key] + 1 : 1;
    // @ts-ignore
    return this[key];
  }
}
