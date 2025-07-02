(module
 (type $0 (func (param i32)))
 (type $1 (func (param i32) (result i32)))
 (type $2 (func (param i32 i32) (result i32)))
 (type $3 (func))
 (type $4 (func (param i32 i32)))
 (type $5 (func (param i32 i32 i32)))
 (type $6 (func (param i32 i32 i32 i32)))
 (type $7 (func (result i32)))
 (type $8 (func (param i32 i32 f64)))
 (type $9 (func (param i32 i32) (result f64)))
 (type $10 (func (param i32 i32 i64)))
 (type $11 (func (param i32 i32 i32 i32) (result i32)))
 (type $12 (func (param f64 f64 f64 f64 f64 f64 f64) (result f64)))
 (type $13 (func (param i32 f64 f64) (result i32)))
 (type $14 (func (param i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $orient2d/B (mut i32) (i32.const 0))
 (global $orient2d/C1 (mut i32) (i32.const 0))
 (global $orient2d/C2 (mut i32) (i32.const 0))
 (global $orient2d/D (mut i32) (i32.const 0))
 (global $orient2d/u (mut i32) (i32.const 0))
 (global $index/EPSILON (mut f64) (f64.const 0))
 (global $index/EDGE_STACK (mut i32) (i32.const 0))
 (global $index/EMPTY_STATIC_U32 (mut i32) (i32.const 0))
 (global $index/EMPTY_STATIC_I32 (mut i32) (i32.const 0))
 (global $index/EMPTY_STATIC_F64 (mut i32) (i32.const 0))
 (global $index/delaunatorInstance (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 2432))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 35240))
 (memory $0 1)
 (data $0 (i32.const 1036) ",")
 (data $0.1 (i32.const 1048) "\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data $1 (i32.const 1084) ",")
 (data $1.1 (i32.const 1096) "\02\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $2 (i32.const 1132) "<")
 (data $2.1 (i32.const 1144) "\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data $3 (i32.const 1196) "<")
 (data $3.1 (i32.const 1208) "\02\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data $6 (i32.const 1324) "<")
 (data $6.1 (i32.const 1336) "\02\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data $7 (i32.const 1388) ",")
 (data $7.1 (i32.const 1400) "\02\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data $9 (i32.const 1468) "<")
 (data $9.1 (i32.const 1480) "\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data $10 (i32.const 1536) "\be\f3\f8y\eca\f6?\190\96[\c6\fe\de\bf=\88\afJ\edq\f5?\a4\fc\d42h\0b\db\bf\b0\10\f0\f09\95\f4?{\b7\1f\n\8bA\d7\bf\85\03\b8\b0\95\c9\f3?{\cfm\1a\e9\9d\d3\bf\a5d\88\0c\19\r\f3?1\b6\f2\f3\9b\1d\d0\bf\a0\8e\0b{\"^\f2?\f0z;\1b\1d|\c9\bf?4\1aJJ\bb\f1?\9f<\af\93\e3\f9\c2\bf\ba\e5\8a\f0X#\f1?\\\8dx\bf\cb`\b9\bf\a7\00\99A?\95\f0?\ce_G\b6\9do\aa\bf\00\00\00\00\00\00\f0?\00\00\00\00\00\00\00\00\acG\9a\fd\8c`\ee?=\f5$\9f\ca8\b3?\a0j\02\1f\b3\a4\ec?\ba\918T\a9v\c4?\e6\fcjW6 \eb?\d2\e4\c4J\0b\84\ce?-\aa\a1c\d1\c2\e9?\1ce\c6\f0E\06\d4?\edAx\03\e6\86\e8?\f8\9f\1b,\9c\8e\d8?bHS\f5\dcg\e7?\cc{\b1N\a4\e0\dc?")
 (data $11 (i32.const 1798) "\f0?t\85\15\d3\b0\d9\ef?\0f\89\f9lX\b5\ef?Q[\12\d0\01\93\ef?{Q}<\b8r\ef?\aa\b9h1\87T\ef?8bunz8\ef?\e1\de\1f\f5\9d\1e\ef?\15\b71\n\fe\06\ef?\cb\a9:7\a7\f1\ee?\"4\12L\a6\de\ee?-\89a`\08\ce\ee?\'*6\d5\da\bf\ee?\82O\9dV+\b4\ee?)TH\dd\07\ab\ee?\85U:\b0~\a4\ee?\cd;\7ff\9e\a0\ee?t_\ec\e8u\9f\ee?\87\01\ebs\14\a1\ee?\13\ceL\99\89\a5\ee?\db\a0*B\e5\ac\ee?\e5\c5\cd\b07\b7\ee?\90\f0\a3\82\91\c4\ee?]%>\b2\03\d5\ee?\ad\d3Z\99\9f\e8\ee?G^\fb\f2v\ff\ee?\9cR\85\dd\9b\19\ef?i\90\ef\dc 7\ef?\87\a4\fb\dc\18X\ef?_\9b{3\97|\ef?\da\90\a4\a2\af\a4\ef?@En[v\d0\ef?")
 (data $12 (i32.const 2060) "<")
 (data $12.1 (i32.const 2072) "\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $13 (i32.const 2124) "|")
 (data $13.1 (i32.const 2136) "\02\00\00\00^\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00n\00u\00l\00l\00\'\00 \00(\00n\00o\00t\00 \00a\00s\00s\00i\00g\00n\00e\00d\00 \00o\00r\00 \00f\00a\00i\00l\00e\00d\00 \00c\00a\00s\00t\00)")
 (data $14 (i32.const 2252) ",")
 (data $14.1 (i32.const 2264) "\02\00\00\00\10\00\00\00i\00n\00d\00e\00x\00.\00t\00s")
 (data $15 (i32.const 2300) "<")
 (data $15.1 (i32.const 2312) "\02\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data $16 (i32.const 2364) "<")
 (data $16.1 (i32.const 2376) "\02\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data $17 (i32.const 2432) "\t\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00\02\1a\00\00$\01\00\00$\t\00\00$\1a")
 (export "getTriangles" (func $index/getTriangles))
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "createDelaunator" (func $export:index/createDelaunator))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  global.get $index/EDGE_STACK
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $index/EMPTY_STATIC_U32
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $index/EMPTY_STATIC_I32
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $index/EMPTY_STATIC_F64
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $index/delaunatorInstance
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  i32.const 1344
  call $~lib/rt/itcms/__visit
  i32.const 1056
  call $~lib/rt/itcms/__visit
  i32.const 1152
  call $~lib/rt/itcms/__visit
  i32.const 2320
  call $~lib/rt/itcms/__visit
  i32.const 2384
  call $~lib/rt/itcms/__visit
  global.get $orient2d/B
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $orient2d/C1
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $orient2d/C2
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $orient2d/D
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $orient2d/u
  local.tee $0
  if
   local.get $0
   call $~lib/rt/itcms/__visit
  end
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1216
     i32.const 160
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.const -4
  i32.and
  local.tee $1
  i32.eqz
  if
   local.get $0
   i32.load offset=8
   i32.eqz
   local.get $0
   i32.const 35240
   i32.lt_u
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1216
    i32.const 128
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load offset=8
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 1216
   i32.const 132
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $0
  local.get $1
  local.get $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1216
    i32.const 148
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $1
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 2
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $2
   i32.const 2432
   i32.load
   i32.gt_u
   if
    i32.const 1344
    i32.const 1408
    i32.const 21
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   i32.const 2
   i32.shl
   i32.const 2436
   i32.add
   i32.load
   i32.const 32
   i32.and
  end
  local.set $3
  local.get $1
  i32.load offset=8
  local.set $2
  local.get $0
  global.get $~lib/rt/itcms/white
  i32.eqz
  i32.const 2
  local.get $3
  select
  local.get $1
  i32.or
  i32.store offset=4
  local.get $0
  local.get $2
  i32.store offset=8
  local.get $2
  local.get $0
  local.get $2
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $1
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/itcms/__visit (param $0 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.tee $3
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1488
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1073741820
   local.get $3
   local.get $3
   i32.const 1073741820
   i32.ge_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $2
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $3
  i32.const 16
  i32.lt_u
  local.get $2
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $5
  local.get $1
  i32.load offset=4
  local.tee $4
  if
   local.get $4
   local.get $5
   i32.store offset=8
  end
  local.get $5
  if
   local.get $5
   local.get $4
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.tee $1
  i32.load offset=96
  i32.eq
  if
   local.get $1
   local.get $5
   i32.store offset=96
   local.get $5
   i32.eqz
   if
    local.get $0
    local.get $2
    i32.const 2
    i32.shl
    i32.add
    local.tee $1
    i32.load offset=4
    i32.const -2
    local.get $3
    i32.rotl
    i32.and
    local.set $3
    local.get $1
    local.get $3
    i32.store offset=4
    local.get $3
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $2
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1488
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1488
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $1
  i32.const 4
  i32.add
  local.get $2
  i32.add
  i32.ne
  if
   i32.const 0
   i32.const 1488
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1073741820
   local.get $2
   local.get $2
   i32.const 1073741820
   i32.ge_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $5
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $2
  i32.const 16
  i32.lt_u
  local.get $5
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $5
  i32.const 4
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $5
  i32.const 4
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $2
  local.get $1
  i64.extend_i32_u
  i64.lt_u
  if
   i32.const 0
   i32.const 1488
   i32.const 382
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.load offset=1568
  local.tee $3
  if
   local.get $3
   i32.const 4
   i32.add
   local.get $1
   i32.gt_u
   if
    i32.const 0
    i32.const 1488
    i32.const 389
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   local.get $1
   i32.const 16
   i32.sub
   local.tee $5
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $5
    local.set $1
   end
  else
   local.get $0
   i32.const 1572
   i32.add
   local.get $1
   i32.gt_u
   if
    i32.const 0
    i32.const 1488
    i32.const 402
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  i32.wrap_i64
  i32.const -16
  i32.and
  local.get $1
  i32.sub
  local.tee $3
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $3
  i32.const 8
  i32.sub
  local.tee $3
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 4
  i32.add
  local.get $3
  i32.add
  local.tee $3
  i32.const 2
  i32.store
  local.get $0
  local.get $3
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $1
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $1
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 35248
  i32.const 0
  i32.store
  i32.const 36816
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $0
   i32.const 23
   i32.lt_u
   if
    local.get $0
    i32.const 2
    i32.shl
    i32.const 35248
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $1
    loop $for-loop|1
     local.get $1
     i32.const 16
     i32.lt_u
     if
      local.get $0
      i32.const 4
      i32.shl
      local.get $1
      i32.add
      i32.const 2
      i32.shl
      i32.const 35248
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $1
      i32.const 1
      i32.add
      local.set $1
      br $for-loop|1
     end
    end
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  i32.const 35248
  i32.const 36820
  memory.size
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 35248
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      br_table $case0|0 $case1|0 $case2|0 $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $1
      local.get $0
      i32.load offset=4
      local.tee $2
      i32.const 3
      i32.and
      i32.ne
      if
       local.get $0
       local.get $2
       i32.const -4
       i32.and
       local.get $1
       i32.or
       i32.store offset=4
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       return
      end
      local.get $0
      i32.load offset=4
      i32.const -4
      i32.and
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/iter
    i32.load offset=4
    i32.const -4
    i32.and
    i32.eq
    if
     global.get $~lib/memory/__stack_pointer
     local.set $0
     loop $while-continue|0
      local.get $0
      i32.const 35240
      i32.lt_u
      if
       local.get $0
       i32.load
       call $~lib/rt/itcms/__visit
       local.get $0
       i32.const 4
       i32.add
       local.set $0
       br $while-continue|0
      end
     end
     global.get $~lib/rt/itcms/iter
     i32.load offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $1
       local.get $0
       i32.load offset=4
       local.tee $2
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $2
        i32.const -4
        i32.and
        local.get $1
        i32.or
        i32.store offset=4
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
       end
       local.get $0
       i32.load offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $0
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $0
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $0
     i32.load offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    return
   end
   global.get $~lib/rt/itcms/iter
   local.tee $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    i32.load offset=4
    local.tee $1
    i32.const -4
    i32.and
    global.set $~lib/rt/itcms/iter
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.get $1
    i32.const 3
    i32.and
    i32.ne
    if
     i32.const 0
     i32.const 1216
     i32.const 229
     i32.const 20
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 35240
    i32.lt_u
    if
     local.get $0
     i32.const 0
     i32.store offset=4
     local.get $0
     i32.const 0
     i32.store offset=8
    else
     global.get $~lib/rt/itcms/total
     local.get $0
     i32.load
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/itcms/total
     local.get $0
     i32.const 4
     i32.add
     local.tee $0
     i32.const 35240
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      global.get $~lib/rt/tlsf/ROOT
      local.get $0
      i32.const 4
      i32.sub
      local.set $2
      local.get $0
      i32.const 15
      i32.and
      i32.const 1
      local.get $0
      select
      if (result i32)
       i32.const 1
      else
       local.get $2
       i32.load
       i32.const 1
       i32.and
      end
      if
       i32.const 0
       i32.const 1488
       i32.const 562
       i32.const 3
       call $~lib/builtins/abort
       unreachable
      end
      local.get $2
      local.get $2
      i32.load
      i32.const 1
      i32.or
      i32.store
      local.get $2
      call $~lib/rt/tlsf/insertBlock
     end
    end
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   i32.store offset=4
   global.get $~lib/rt/itcms/toSpace
   global.get $~lib/rt/itcms/toSpace
   i32.store offset=8
   i32.const 0
   global.set $~lib/rt/itcms/state
  end
  i32.const 0
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.set $1
   end
   local.get $1
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  local.get $2
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1488
   i32.const 334
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1488
     i32.const 347
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1152
   i32.const 1216
   i32.const 261
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt$69
    i32.const 2048
    local.set $2
    loop $do-loop|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt$69
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/total
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.set $4
  local.get $0
  i32.const 16
  i32.add
  local.tee $2
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1152
   i32.const 1488
   i32.const 461
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $2
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $2
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
  end
  local.tee $5
  call $~lib/rt/tlsf/searchBlock
  local.tee $2
  i32.eqz
  if
   memory.size
   local.tee $2
   local.get $5
   i32.const 256
   i32.ge_u
   if (result i32)
    local.get $5
    i32.const 536870910
    i32.lt_u
    if (result i32)
     local.get $5
     i32.const 1
     i32.const 27
     local.get $5
     i32.clz
     i32.sub
     i32.shl
     i32.add
     i32.const 1
     i32.sub
    else
     local.get $5
    end
   else
    local.get $5
   end
   i32.const 4
   local.get $4
   i32.load offset=1568
   local.get $2
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   i32.ne
   i32.shl
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $3
   local.get $2
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $4
   local.get $2
   i32.const 16
   i32.shl
   memory.size
   i64.extend_i32_s
   i64.const 16
   i64.shl
   call $~lib/rt/tlsf/addMemory
   local.get $4
   local.get $5
   call $~lib/rt/tlsf/searchBlock
   local.tee $2
   i32.eqz
   if
    i32.const 0
    i32.const 1488
    i32.const 499
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $5
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1488
   i32.const 501
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $2
  call $~lib/rt/tlsf/removeBlock
  local.get $2
  i32.load
  local.set $6
  local.get $5
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1488
   i32.const 361
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $6
  i32.const -4
  i32.and
  local.get $5
  i32.sub
  local.tee $3
  i32.const 16
  i32.ge_u
  if
   local.get $2
   local.get $5
   local.get $6
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.add
   local.tee $5
   local.get $3
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $4
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $2
   local.get $6
   i32.const -2
   i32.and
   i32.store
   local.get $2
   i32.const 4
   i32.add
   local.get $2
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   local.get $3
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $1
  i32.load offset=8
  local.set $3
  local.get $2
  local.get $1
  global.get $~lib/rt/itcms/white
  i32.or
  i32.store offset=4
  local.get $2
  local.get $3
  i32.store offset=8
  local.get $3
  local.get $2
  local.get $3
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $1
  local.get $2
  i32.store offset=8
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $1
  i32.const 0
  local.get $0
  memory.fill
  local.get $1
 )
 (func $~lib/rt/itcms/__link (param $0 i32) (param $1 i32)
  local.get $1
  i32.eqz
  if
   return
  end
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1216
   i32.const 295
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=4
   i32.const 3
   i32.and
   local.tee $0
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $1
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    local.get $0
    i32.const 3
    i32.eq
    i32.and
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 2320
    i32.const 1216
    i32.const 338
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/pinSpace
   local.tee $3
   i32.load offset=8
   local.set $2
   local.get $1
   local.get $3
   i32.const 3
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $3
   local.get $1
   i32.store offset=8
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.tee $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 2384
   i32.const 1216
   i32.const 352
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $1
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/fromSpace
   local.tee $0
   i32.load offset=8
   local.set $2
   local.get $1
   local.get $0
   global.get $~lib/rt/itcms/white
   i32.or
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $0
   local.get $1
   i32.store offset=8
  end
 )
 (func $~lib/rt/itcms/__collect
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i64.const 200
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  block $invalid
   block $index/Delaunator
    block $~lib/staticarray/StaticArray<f64>
     block $~lib/staticarray/StaticArray<i32>
      block $~lib/staticarray/StaticArray<u32>
       block $~lib/array/Array<f64>
        block $~lib/arraybuffer/ArrayBufferView
         block $~lib/string/String
          block $~lib/arraybuffer/ArrayBuffer
           block $~lib/object/Object
            local.get $0
            i32.const 8
            i32.sub
            i32.load
            br_table $~lib/object/Object $~lib/arraybuffer/ArrayBuffer $~lib/string/String $~lib/arraybuffer/ArrayBufferView $~lib/array/Array<f64> $~lib/staticarray/StaticArray<u32> $~lib/staticarray/StaticArray<i32> $~lib/staticarray/StaticArray<f64> $index/Delaunator $invalid
           end
           return
          end
          return
         end
         return
        end
        local.get $0
        i32.load
        local.tee $0
        if
         local.get $0
         call $~lib/rt/itcms/__visit
        end
        return
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2472
       i32.lt_s
       if
        i32.const 35264
        i32.const 35312
        i32.const 1
        i32.const 1
        call $~lib/builtins/abort
        unreachable
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 0
       i32.store
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.store
       local.get $0
       i32.load
       call $~lib/rt/itcms/__visit
       global.get $~lib/memory/__stack_pointer
       i32.const 4
       i32.add
       global.set $~lib/memory/__stack_pointer
       return
      end
      return
     end
     return
    end
    return
   end
   local.get $0
   i32.load
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=4
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=8
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=16
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=20
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=24
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=28
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=32
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=36
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=40
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=44
   local.tee $1
   if
    local.get $1
    call $~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load offset=48
   local.tee $0
   if
    local.get $0
    call $~lib/rt/itcms/__visit
   end
   return
  end
  unreachable
 )
 (func $~start
  (local $0 f64)
  (local $1 i32)
  (local $2 i64)
  (local $3 i32)
  (local $4 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  memory.size
  i32.const 16
  i32.shl
  i32.const 35240
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1268
  i32.const 1264
  i32.store
  i32.const 1272
  i32.const 1264
  i32.store
  i32.const 1264
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1300
  i32.const 1296
  i32.store
  i32.const 1304
  i32.const 1296
  i32.store
  i32.const 1296
  global.set $~lib/rt/itcms/toSpace
  i32.const 1444
  i32.const 1440
  i32.store
  i32.const 1448
  i32.const 1440
  i32.store
  i32.const 1440
  global.set $~lib/rt/itcms/fromSpace
  i32.const 4
  call $util/vec
  global.set $orient2d/B
  i32.const 8
  call $util/vec
  global.set $orient2d/C1
  i32.const 12
  call $util/vec
  global.set $orient2d/C2
  i32.const 16
  call $util/vec
  global.set $orient2d/D
  i32.const 4
  call $util/vec
  global.set $orient2d/u
  block $~lib/util/math/powf_lut|inlined.0 (result f32)
   i32.const 1680
   f64.load
   f64.const -1
   f64.add
   local.tee $0
   local.get $0
   f64.mul
   local.set $4
   local.get $0
   f64.const 0.288457581109214
   f64.mul
   f64.const -0.36092606229713164
   f64.add
   local.get $4
   local.get $4
   f64.mul
   f64.mul
   local.get $0
   f64.const 1.4426950408774342
   f64.mul
   i32.const 1688
   f64.load
   f64.const 1
   f64.add
   f64.add
   local.get $0
   f64.const 0.480898481472577
   f64.mul
   f64.const -0.7213474675006291
   f64.add
   local.get $4
   f64.mul
   f64.add
   f64.add
   f64.const -52
   f64.mul
   local.tee $0
   i64.reinterpret_f64
   i64.const 47
   i64.shr_u
   i64.const 65535
   i64.and
   i64.const 32959
   i64.ge_u
   if
    f32.const inf
    local.get $0
    f64.const 127.99999995700433
    f64.gt
    br_if $~lib/util/math/powf_lut|inlined.0
    drop
    f32.const 0
    local.get $0
    f64.const -150
    f64.le
    br_if $~lib/util/math/powf_lut|inlined.0
    drop
   end
   local.get $0
   f64.const 211106232532992
   f64.add
   local.tee $4
   i64.reinterpret_f64
   local.set $2
   local.get $0
   local.get $4
   f64.const -211106232532992
   f64.add
   f64.sub
   local.tee $0
   f64.const 0.6931471806916203
   f64.mul
   f64.const 1
   f64.add
   local.get $0
   f64.const 0.05550361559341535
   f64.mul
   f64.const 0.2402284522445722
   f64.add
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   f64.add
   local.get $2
   i32.wrap_i64
   i32.const 31
   i32.and
   i32.const 3
   i32.shl
   i32.const 1792
   i32.add
   i64.load
   local.get $2
   i64.const 47
   i64.shl
   i64.add
   f64.reinterpret_i64
   f64.mul
   f32.demote_f64
  end
  f64.promote_f32
  global.set $index/EPSILON
  i32.const 512
  call $~lib/staticarray/StaticArray<u32>#constructor
  global.set $index/EDGE_STACK
  loop $for-loop|0
   local.get $1
   i32.const 512
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    global.get $index/EDGE_STACK
    local.tee $3
    i32.store
    local.get $3
    local.get $1
    i32.const 0
    call $~lib/staticarray/StaticArray<u32>#__set
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 0
  call $~lib/staticarray/StaticArray<u32>#constructor
  global.set $index/EMPTY_STATIC_U32
  i32.const 0
  call $~lib/staticarray/StaticArray<i32>#constructor
  global.set $index/EMPTY_STATIC_I32
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#constructor
  global.set $index/EMPTY_STATIC_F64
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<f64>#__set (param $0 i32) (param $1 i32) (param $2 f64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $1
   local.get $0
   i32.load offset=12
   i32.ge_u
   if
    local.get $1
    i32.const 0
    i32.lt_s
    if
     i32.const 1344
     i32.const 1104
     i32.const 130
     i32.const 22
     call $~lib/builtins/abort
     unreachable
    end
    local.get $1
    i32.const 1
    i32.add
    local.tee $6
    local.set $3
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2472
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $3
    local.get $0
    i32.load offset=8
    local.tee $4
    i32.const 3
    i32.shr_u
    i32.gt_u
    if
     local.get $3
     i32.const 134217727
     i32.gt_u
     if
      i32.const 1056
      i32.const 1104
      i32.const 19
      i32.const 48
      call $~lib/builtins/abort
      unreachable
     end
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     block $__inlined_func$~lib/rt/itcms/__renew$271
      i32.const 1073741820
      local.get $4
      i32.const 1
      i32.shl
      local.tee $4
      local.get $4
      i32.const 1073741820
      i32.ge_u
      select
      local.tee $4
      i32.const 8
      local.get $3
      local.get $3
      i32.const 8
      i32.le_u
      select
      i32.const 3
      i32.shl
      local.tee $3
      local.get $3
      local.get $4
      i32.lt_u
      select
      local.tee $5
      local.get $0
      i32.load
      local.tee $4
      i32.const 20
      i32.sub
      local.tee $7
      i32.load
      i32.const -4
      i32.and
      i32.const 16
      i32.sub
      i32.le_u
      if
       local.get $7
       local.get $5
       i32.store offset=16
       local.get $4
       local.set $3
       br $__inlined_func$~lib/rt/itcms/__renew$271
      end
      local.get $5
      local.get $7
      i32.load offset=12
      call $~lib/rt/itcms/__new
      local.tee $3
      local.get $4
      local.get $5
      local.get $7
      i32.load offset=16
      local.tee $7
      local.get $5
      local.get $7
      i32.lt_u
      select
      memory.copy
     end
     local.get $3
     local.get $4
     i32.ne
     if
      local.get $0
      local.get $3
      i32.store
      local.get $0
      local.get $3
      i32.store offset=4
      local.get $0
      local.get $3
      call $~lib/rt/itcms/__link
     end
     local.get $0
     local.get $5
     i32.store offset=8
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $0
    local.get $6
    i32.store offset=12
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.load offset=4
   local.get $1
   i32.const 3
   i32.shl
   i32.add
   local.get $2
   f64.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 35264
  i32.const 35312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $util/vec (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store
   global.get $~lib/memory/__stack_pointer
   i64.const 0
   i64.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 4
   call $~lib/rt/itcms/__new
   local.tee $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 134217727
   i32.gt_u
   if
    i32.const 1056
    i32.const 1104
    i32.const 70
    i32.const 60
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   local.get $0
   local.get $0
   i32.const 8
   i32.le_u
   select
   i32.const 3
   i32.shl
   local.tee $4
   i32.const 1
   call $~lib/rt/itcms/__new
   local.tee $2
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=12
   local.get $1
   local.get $2
   i32.store
   local.get $1
   local.get $2
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   local.get $2
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   local.get $4
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $1
   local.get $0
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   loop $for-loop|0
    local.get $0
    local.get $3
    i32.gt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store offset=4
     local.get $1
     local.get $3
     f64.const 0
     call $~lib/array/Array<f64>#__set
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  i32.const 35264
  i32.const 35312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/staticarray/StaticArray<u32>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1344
   i32.const 2080
   i32.const 93
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/staticarray/StaticArray<f64>#__set (param $0 i32) (param $1 i32) (param $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1344
   i32.const 2080
   i32.const 93
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  f64.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/staticarray/StaticArray<f64>#__get (param $0 i32) (param $1 i32) (result f64)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1344
   i32.const 2080
   i32.const 78
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/staticarray/StaticArray<u32>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1344
   i32.const 2080
   i32.const 78
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/swap (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  call $~lib/staticarray/StaticArray<u32>#__get
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  local.get $1
  local.get $0
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#__get
  call $~lib/staticarray/StaticArray<u32>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $2
  local.get $3
  call $~lib/staticarray/StaticArray<u32>#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/quicksort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 f64)
  (local $8 i32)
  (local $9 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  local.get $3
  local.get $2
  i32.sub
  i32.const 20
  i32.le_s
  if
   local.get $2
   i32.const 1
   i32.add
   local.set $6
   loop $for-loop|0
    local.get $3
    local.get $6
    i32.ge_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     local.get $0
     local.get $6
     call $~lib/staticarray/StaticArray<u32>#__get
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store
     local.get $1
     local.get $8
     call $~lib/staticarray/StaticArray<f64>#__get
     local.set $7
     local.get $6
     i32.const 1
     i32.sub
     local.set $4
     loop $while-continue|1
      local.get $2
      local.get $4
      i32.le_s
      if (result i32)
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.store offset=4
       local.get $1
       local.get $0
       local.get $4
       call $~lib/staticarray/StaticArray<u32>#__get
       call $~lib/staticarray/StaticArray<f64>#__get
       local.get $7
       f64.gt
      else
       i32.const 0
      end
      if
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.store
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.store offset=4
       local.get $4
       i32.const 1
       i32.add
       local.set $9
       local.get $4
       local.tee $5
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.get $9
       local.get $0
       local.get $5
       call $~lib/staticarray/StaticArray<u32>#__get
       call $~lib/staticarray/StaticArray<u32>#__set
       br $while-continue|1
      end
     end
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     local.get $0
     local.get $4
     i32.const 1
     i32.add
     local.get $8
     call $~lib/staticarray/StaticArray<u32>#__set
     local.get $6
     i32.const 1
     i32.add
     local.set $6
     br $for-loop|0
    end
   end
  else
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $3
   local.tee $4
   local.get $2
   i32.add
   i32.const 1
   i32.shr_s
   local.get $2
   i32.const 1
   i32.add
   local.tee $6
   call $index/swap
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $2
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $7
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $4
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.get $7
   f64.lt
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $0
    local.get $2
    local.get $4
    call $index/swap
   end
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $6
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $7
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $3
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.get $7
   f64.lt
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $0
    local.get $6
    local.get $3
    call $index/swap
   end
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $2
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $7
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $1
   local.get $0
   local.get $6
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<f64>#__get
   local.get $7
   f64.lt
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $0
    local.get $2
    local.get $6
    call $index/swap
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $6
   call $~lib/staticarray/StaticArray<u32>#__get
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   local.get $1
   local.get $5
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $7
   loop $while-continue|2
    loop $do-loop|3
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=4
     local.get $1
     local.get $0
     local.get $6
     i32.const 1
     i32.add
     local.tee $6
     call $~lib/staticarray/StaticArray<u32>#__get
     call $~lib/staticarray/StaticArray<f64>#__get
     local.get $7
     f64.lt
     br_if $do-loop|3
    end
    loop $do-loop|4
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=4
     local.get $1
     local.get $0
     local.get $4
     i32.const 1
     i32.sub
     local.tee $4
     call $~lib/staticarray/StaticArray<u32>#__get
     call $~lib/staticarray/StaticArray<f64>#__get
     local.get $7
     f64.gt
     br_if $do-loop|4
    end
    local.get $4
    local.get $6
    i32.ge_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     local.get $0
     local.get $6
     local.get $4
     call $index/swap
     br $while-continue|2
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 1
   i32.add
   local.get $0
   local.get $4
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $4
   local.get $5
   call $~lib/staticarray/StaticArray<u32>#__set
   local.get $3
   local.get $6
   i32.sub
   i32.const 1
   i32.add
   local.get $4
   local.get $2
   i32.sub
   i32.ge_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $1
    local.get $6
    local.get $3
    call $index/quicksort
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $1
    local.get $2
    local.get $4
    i32.const 1
    i32.sub
    call $index/quicksort
   else
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $1
    local.get $2
    local.get $4
    i32.const 1
    i32.sub
    call $index/quicksort
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=4
    local.get $0
    local.get $1
    local.get $6
    local.get $3
    call $index/quicksort
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/array/Array<f64>#__get (param $0 i32) (param $1 i32) (result f64)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1344
   i32.const 1104
   i32.const 114
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $util/sum (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  (local $10 i32)
  (local $11 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store
  local.get $1
  i32.const 0
  call $~lib/array/Array<f64>#__get
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store
  local.get $2
  i32.const 0
  call $~lib/array/Array<f64>#__get
  local.tee $8
  local.get $7
  f64.gt
  local.get $8
  local.get $7
  f64.neg
  f64.gt
  i32.eq
  if
   local.get $7
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store
   i32.const 1
   local.set $10
   local.get $1
   i32.const 1
   call $~lib/array/Array<f64>#__get
   local.set $7
  else
   local.get $8
   local.set $5
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store
   i32.const 1
   local.set $11
   local.get $2
   i32.const 1
   call $~lib/array/Array<f64>#__get
   local.set $8
  end
  local.get $11
  i32.const 4
  i32.lt_s
  local.get $0
  local.get $10
  i32.gt_s
  i32.and
  if
   local.get $7
   local.get $8
   f64.lt
   local.get $8
   local.get $7
   f64.neg
   f64.gt
   i32.eq
   if
    local.get $5
    local.get $7
    local.get $5
    f64.add
    local.tee $6
    local.get $7
    f64.sub
    f64.sub
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $1
    local.get $10
    i32.const 1
    i32.add
    local.tee $10
    call $~lib/array/Array<f64>#__get
    local.set $7
   else
    local.get $5
    local.get $8
    local.get $5
    f64.add
    local.tee $6
    local.get $8
    f64.sub
    f64.sub
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store
    local.get $2
    local.get $11
    i32.const 1
    i32.add
    local.tee $11
    call $~lib/array/Array<f64>#__get
    local.set $8
   end
   local.get $6
   local.set $5
   local.get $9
   f64.const 0
   f64.ne
   if (result i32)
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    i32.const 0
    local.get $9
    call $~lib/array/Array<f64>#__set
    i32.const 1
   else
    i32.const 0
   end
   local.set $4
   loop $while-continue|0
    local.get $11
    i32.const 4
    i32.lt_s
    local.get $0
    local.get $10
    i32.gt_s
    i32.and
    if
     local.get $7
     local.get $8
     f64.lt
     local.get $8
     local.get $7
     f64.neg
     f64.gt
     i32.eq
     if
      local.get $5
      local.get $7
      f64.add
      local.tee $6
      local.get $5
      f64.sub
      local.set $9
      local.get $5
      local.get $6
      local.get $9
      f64.sub
      f64.sub
      local.get $7
      local.get $9
      f64.sub
      f64.add
      local.set $9
      global.get $~lib/memory/__stack_pointer
      local.get $1
      i32.store
      local.get $1
      local.get $10
      i32.const 1
      i32.add
      local.tee $10
      call $~lib/array/Array<f64>#__get
      local.set $7
     else
      local.get $5
      local.get $8
      f64.add
      local.tee $6
      local.get $5
      f64.sub
      local.set $9
      local.get $5
      local.get $6
      local.get $9
      f64.sub
      f64.sub
      local.get $8
      local.get $9
      f64.sub
      f64.add
      local.set $9
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.store
      local.get $2
      local.get $11
      i32.const 1
      i32.add
      local.tee $11
      call $~lib/array/Array<f64>#__get
      local.set $8
     end
     local.get $6
     local.set $5
     local.get $9
     f64.const 0
     f64.ne
     if
      global.get $~lib/memory/__stack_pointer
      local.get $3
      i32.store
      local.get $3
      local.get $4
      local.get $9
      call $~lib/array/Array<f64>#__set
      local.get $4
      i32.const 1
      i32.add
      local.set $4
     end
     br $while-continue|0
    end
   end
  end
  loop $while-continue|1
   local.get $0
   local.get $10
   i32.gt_s
   if
    local.get $5
    local.get $7
    f64.add
    local.tee $6
    local.get $5
    f64.sub
    local.set $9
    local.get $5
    local.get $6
    local.get $9
    f64.sub
    f64.sub
    local.get $7
    local.get $9
    f64.sub
    f64.add
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store
    local.get $1
    local.get $10
    i32.const 1
    i32.add
    local.tee $10
    call $~lib/array/Array<f64>#__get
    local.set $7
    local.get $6
    local.set $5
    local.get $9
    f64.const 0
    f64.ne
    if
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     local.get $3
     local.get $4
     local.get $9
     call $~lib/array/Array<f64>#__set
     local.get $4
     i32.const 1
     i32.add
     local.set $4
    end
    br $while-continue|1
   end
  end
  loop $while-continue|2
   local.get $11
   i32.const 4
   i32.lt_s
   if
    local.get $5
    local.get $8
    f64.add
    local.tee $6
    local.get $5
    f64.sub
    local.set $7
    local.get $5
    local.get $6
    local.get $7
    f64.sub
    f64.sub
    local.get $8
    local.get $7
    f64.sub
    f64.add
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store
    local.get $2
    local.get $11
    i32.const 1
    i32.add
    local.tee $11
    call $~lib/array/Array<f64>#__get
    local.set $8
    local.get $6
    local.set $5
    local.get $7
    f64.const 0
    f64.ne
    if
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     local.get $3
     local.get $4
     local.get $7
     call $~lib/array/Array<f64>#__set
     local.get $4
     i32.const 1
     i32.add
     local.set $4
    end
    br $while-continue|2
   end
  end
  local.get $4
  i32.eqz
  local.get $5
  f64.const 0
  f64.ne
  i32.or
  if
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store
   local.get $3
   local.get $4
   local.get $5
   call $~lib/array/Array<f64>#__set
   local.get $4
   i32.const 1
   i32.add
   local.set $4
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $4
 )
 (func $orient2d/orient2dadapt (param $0 f64) (param $1 f64) (param $2 f64) (param $3 f64) (param $4 f64) (param $5 f64) (param $6 f64) (result f64)
  (local $7 f64)
  (local $8 i32)
  (local $9 f64)
  (local $10 f64)
  (local $11 f64)
  (local $12 f64)
  (local $13 f64)
  (local $14 f64)
  (local $15 f64)
  (local $16 f64)
  (local $17 f64)
  (local $18 f64)
  (local $19 i32)
  (local $20 i32)
  (local $21 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   block $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i32.const 2472
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i64.const 0
    i64.store
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store offset=8
    local.get $0
    local.get $4
    f64.sub
    local.tee $9
    local.get $3
    local.get $5
    f64.sub
    local.tee $10
    f64.mul
    local.set $11
    local.get $1
    local.get $5
    f64.sub
    local.tee $12
    local.get $2
    local.get $4
    f64.sub
    local.tee $13
    f64.mul
    local.set $14
    local.get $9
    local.get $9
    f64.const 134217729
    f64.mul
    local.tee $7
    local.get $7
    local.get $9
    f64.sub
    f64.sub
    local.tee $7
    f64.sub
    local.tee $15
    local.get $10
    local.get $10
    f64.const 134217729
    f64.mul
    local.tee $16
    local.get $16
    local.get $10
    f64.sub
    f64.sub
    local.tee $16
    f64.sub
    local.tee $17
    f64.mul
    local.get $11
    local.get $7
    local.get $16
    f64.mul
    f64.sub
    local.get $15
    local.get $16
    f64.mul
    f64.sub
    local.get $7
    local.get $17
    f64.mul
    f64.sub
    f64.sub
    local.tee $15
    local.get $15
    local.get $12
    local.get $12
    f64.const 134217729
    f64.mul
    local.tee $7
    local.get $7
    local.get $12
    f64.sub
    f64.sub
    local.tee $16
    f64.sub
    local.tee $17
    local.get $13
    local.get $13
    f64.const 134217729
    f64.mul
    local.tee $7
    local.get $7
    local.get $13
    f64.sub
    f64.sub
    local.tee $18
    f64.sub
    local.tee $7
    f64.mul
    local.get $14
    local.get $16
    local.get $18
    f64.mul
    f64.sub
    local.get $17
    local.get $18
    f64.mul
    f64.sub
    local.get $16
    local.get $7
    f64.mul
    f64.sub
    f64.sub
    local.tee $7
    f64.sub
    local.tee $16
    f64.sub
    local.set $17
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $8
    i32.store
    local.get $8
    i32.const 0
    local.get $15
    local.get $16
    local.get $17
    f64.add
    f64.sub
    local.get $17
    local.get $7
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $11
    local.get $16
    f64.add
    local.tee $7
    local.get $11
    f64.sub
    local.set $15
    local.get $11
    local.get $7
    local.get $15
    f64.sub
    f64.sub
    local.get $16
    local.get $15
    f64.sub
    f64.add
    local.tee $11
    local.get $14
    f64.sub
    local.set $15
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $8
    i32.store
    local.get $8
    i32.const 1
    local.get $11
    local.get $15
    local.get $11
    local.get $15
    f64.sub
    local.tee $11
    f64.add
    f64.sub
    local.get $11
    local.get $14
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $7
    local.get $15
    f64.add
    local.tee $11
    local.get $7
    f64.sub
    local.set $14
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $8
    i32.store
    local.get $8
    i32.const 2
    local.get $7
    local.get $11
    local.get $14
    f64.sub
    f64.sub
    local.get $15
    local.get $14
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $8
    i32.store
    local.get $8
    i32.const 3
    local.get $11
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $19
    i32.store
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2472
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i32.const 0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $19
    i32.store
    local.get $19
    i32.const 0
    call $~lib/array/Array<f64>#__get
    local.set $7
    i32.const 1
    local.set $8
    loop $for-loop|0
     local.get $8
     i32.const 4
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $19
      i32.store
      local.get $7
      local.get $19
      local.get $8
      call $~lib/array/Array<f64>#__get
      f64.add
      local.set $7
      local.get $8
      i32.const 1
      i32.add
      local.set $8
      br $for-loop|0
     end
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $6
    f64.const 2.2204460492503146e-16
    f64.mul
    local.tee $11
    local.get $7
    f64.neg
    f64.le
    local.get $7
    local.get $11
    f64.ge
    i32.or
    br_if $folding-inner1
    local.get $1
    local.get $12
    local.get $1
    local.get $12
    f64.sub
    local.tee $1
    f64.add
    f64.sub
    local.get $1
    local.get $5
    f64.sub
    f64.add
    local.tee $1
    f64.const 0
    f64.eq
    local.get $0
    local.get $9
    local.get $0
    local.get $9
    f64.sub
    local.tee $0
    f64.add
    f64.sub
    local.get $0
    local.get $4
    f64.sub
    f64.add
    local.tee $0
    f64.const 0
    f64.eq
    i32.and
    local.get $2
    local.get $13
    local.get $2
    local.get $13
    f64.sub
    local.tee $2
    f64.add
    f64.sub
    local.get $2
    local.get $4
    f64.sub
    f64.add
    local.tee $2
    f64.const 0
    f64.eq
    i32.and
    local.get $3
    local.get $10
    local.get $3
    local.get $10
    f64.sub
    local.tee $3
    f64.add
    f64.sub
    local.get $3
    local.get $5
    f64.sub
    f64.add
    local.tee $3
    f64.const 0
    f64.eq
    i32.and
    br_if $folding-inner1
    local.get $6
    f64.const 1.1093356479670487e-31
    f64.mul
    local.get $7
    f64.abs
    f64.const 3.3306690738754706e-16
    f64.mul
    f64.add
    local.tee $4
    local.get $7
    local.get $9
    local.get $3
    f64.mul
    local.tee $5
    local.get $10
    local.get $0
    f64.mul
    f64.add
    local.get $12
    local.get $2
    f64.mul
    local.tee $6
    local.get $13
    local.get $1
    f64.mul
    f64.add
    f64.sub
    f64.add
    local.tee $7
    f64.neg
    f64.le
    local.get $4
    local.get $7
    f64.le
    i32.or
    br_if $folding-inner1
    local.get $0
    local.get $0
    f64.const 134217729
    f64.mul
    local.tee $4
    local.get $4
    local.get $0
    f64.sub
    f64.sub
    local.tee $4
    f64.sub
    local.tee $7
    local.get $10
    local.get $10
    f64.const 134217729
    f64.mul
    local.tee $11
    local.get $11
    local.get $10
    f64.sub
    f64.sub
    local.tee $11
    f64.sub
    local.tee $14
    f64.mul
    local.get $0
    local.get $10
    f64.mul
    local.tee $10
    local.get $4
    local.get $11
    f64.mul
    f64.sub
    local.get $7
    local.get $11
    f64.mul
    f64.sub
    local.get $4
    local.get $14
    f64.mul
    f64.sub
    f64.sub
    local.tee $7
    local.get $7
    local.get $1
    local.get $1
    f64.const 134217729
    f64.mul
    local.tee $11
    local.get $11
    local.get $1
    f64.sub
    f64.sub
    local.tee $11
    f64.sub
    local.tee $14
    local.get $13
    local.get $13
    f64.const 134217729
    f64.mul
    local.tee $15
    local.get $15
    local.get $13
    f64.sub
    f64.sub
    local.tee $15
    f64.sub
    local.tee $16
    f64.mul
    local.get $1
    local.get $13
    f64.mul
    local.tee $13
    local.get $11
    local.get $15
    f64.mul
    f64.sub
    local.get $14
    local.get $15
    f64.mul
    f64.sub
    local.get $11
    local.get $16
    f64.mul
    f64.sub
    f64.sub
    local.tee $14
    f64.sub
    local.tee $15
    f64.sub
    local.set $16
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $8
    i32.store
    local.get $8
    i32.const 0
    local.get $7
    local.get $15
    local.get $16
    f64.add
    f64.sub
    local.get $16
    local.get $14
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $10
    local.get $15
    f64.add
    local.tee $7
    local.get $10
    f64.sub
    local.set $14
    local.get $10
    local.get $7
    local.get $14
    f64.sub
    f64.sub
    local.get $15
    local.get $14
    f64.sub
    f64.add
    local.tee $10
    local.get $13
    f64.sub
    local.set $14
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $8
    i32.store
    local.get $8
    i32.const 1
    local.get $10
    local.get $14
    local.get $10
    local.get $14
    f64.sub
    local.tee $10
    f64.add
    f64.sub
    local.get $10
    local.get $13
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $7
    local.get $14
    f64.add
    local.tee $10
    local.get $7
    f64.sub
    local.set $13
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $8
    i32.store
    local.get $8
    i32.const 2
    local.get $7
    local.get $10
    local.get $13
    f64.sub
    f64.sub
    local.get $14
    local.get $13
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $8
    i32.store
    local.get $8
    i32.const 3
    local.get $10
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/B
    local.tee $8
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/C1
    local.tee $20
    i32.store offset=8
    i32.const 4
    local.get $8
    local.get $19
    local.get $20
    call $util/sum
    local.get $9
    local.get $9
    f64.const 134217729
    f64.mul
    local.tee $7
    local.get $7
    local.get $9
    f64.sub
    f64.sub
    local.tee $7
    f64.sub
    local.tee $9
    local.get $3
    local.get $3
    f64.const 134217729
    f64.mul
    local.tee $10
    local.get $10
    local.get $3
    f64.sub
    f64.sub
    local.tee $10
    f64.sub
    local.tee $13
    f64.mul
    local.get $5
    local.get $7
    local.get $10
    f64.mul
    f64.sub
    local.get $9
    local.get $10
    f64.mul
    f64.sub
    local.get $7
    local.get $13
    f64.mul
    f64.sub
    f64.sub
    local.tee $7
    local.get $7
    local.get $12
    local.get $12
    f64.const 134217729
    f64.mul
    local.tee $9
    local.get $9
    local.get $12
    f64.sub
    f64.sub
    local.tee $9
    f64.sub
    local.tee $12
    local.get $2
    local.get $2
    f64.const 134217729
    f64.mul
    local.tee $13
    local.get $13
    local.get $2
    f64.sub
    f64.sub
    local.tee $13
    f64.sub
    local.tee $14
    f64.mul
    local.get $6
    local.get $9
    local.get $13
    f64.mul
    f64.sub
    local.get $12
    local.get $13
    f64.mul
    f64.sub
    local.get $9
    local.get $14
    f64.mul
    f64.sub
    f64.sub
    local.tee $9
    f64.sub
    local.tee $12
    f64.sub
    local.set $14
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 0
    local.get $7
    local.get $12
    local.get $14
    f64.add
    f64.sub
    local.get $14
    local.get $9
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $5
    local.get $12
    f64.add
    local.tee $7
    local.get $5
    f64.sub
    local.set $9
    local.get $5
    local.get $7
    local.get $9
    f64.sub
    f64.sub
    local.get $12
    local.get $9
    f64.sub
    f64.add
    local.tee $5
    local.get $6
    f64.sub
    local.set $9
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 1
    local.get $5
    local.get $9
    local.get $5
    local.get $9
    f64.sub
    local.tee $5
    f64.add
    f64.sub
    local.get $5
    local.get $6
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $7
    local.get $9
    f64.add
    local.tee $5
    local.get $7
    f64.sub
    local.set $6
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 2
    local.get $7
    local.get $5
    local.get $6
    f64.sub
    f64.sub
    local.get $9
    local.get $6
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 3
    local.get $5
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/C1
    local.tee $19
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $20
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/C2
    local.tee $21
    i32.store offset=8
    local.get $19
    local.get $20
    local.get $21
    call $util/sum
    local.get $0
    local.get $4
    f64.sub
    local.tee $5
    local.get $3
    local.get $10
    f64.sub
    local.tee $6
    f64.mul
    local.get $0
    local.get $3
    f64.mul
    local.tee $0
    local.get $4
    local.get $10
    f64.mul
    f64.sub
    local.get $5
    local.get $10
    f64.mul
    f64.sub
    local.get $4
    local.get $6
    f64.mul
    f64.sub
    f64.sub
    local.tee $3
    local.get $3
    local.get $1
    local.get $11
    f64.sub
    local.tee $4
    local.get $2
    local.get $13
    f64.sub
    local.tee $5
    f64.mul
    local.get $1
    local.get $2
    f64.mul
    local.tee $1
    local.get $11
    local.get $13
    f64.mul
    f64.sub
    local.get $4
    local.get $13
    f64.mul
    f64.sub
    local.get $11
    local.get $5
    f64.mul
    f64.sub
    f64.sub
    local.tee $2
    f64.sub
    local.tee $4
    f64.sub
    local.set $5
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 0
    local.get $3
    local.get $4
    local.get $5
    f64.add
    f64.sub
    local.get $5
    local.get $2
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $0
    local.get $4
    f64.add
    local.tee $2
    local.get $0
    f64.sub
    local.set $3
    local.get $0
    local.get $2
    local.get $3
    f64.sub
    f64.sub
    local.get $4
    local.get $3
    f64.sub
    f64.add
    local.tee $0
    local.get $1
    f64.sub
    local.set $3
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 1
    local.get $0
    local.get $3
    local.get $0
    local.get $3
    f64.sub
    local.tee $0
    f64.add
    f64.sub
    local.get $0
    local.get $1
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    local.get $2
    local.get $3
    f64.add
    local.tee $0
    local.get $2
    f64.sub
    local.set $1
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 2
    local.get $2
    local.get $0
    local.get $1
    f64.sub
    f64.sub
    local.get $3
    local.get $1
    f64.sub
    f64.add
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $19
    i32.store
    local.get $19
    i32.const 3
    local.get $0
    call $~lib/array/Array<f64>#__set
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/C2
    local.tee $19
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/u
    local.tee $20
    i32.store offset=4
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/D
    local.tee $21
    i32.store offset=8
    local.get $19
    local.get $20
    local.get $21
    call $util/sum
    local.set $8
    global.get $~lib/memory/__stack_pointer
    global.get $orient2d/D
    local.tee $19
    i32.store
    local.get $19
    local.get $8
    i32.const 1
    i32.sub
    call $~lib/array/Array<f64>#__get
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $index/Delaunator#_hashKey (param $0 i32) (param $1 f64) (param $2 f64) (result i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  f64.load offset=64
  f64.sub
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $1
  f64.neg
  local.get $1
  local.get $1
  f64.const 0
  f64.lt
  select
  local.get $2
  local.get $0
  f64.load offset=72
  f64.sub
  local.tee $1
  f64.neg
  local.get $1
  local.get $1
  f64.const 0
  f64.lt
  select
  f64.add
  f64.div
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  f64.const 3
  local.get $2
  f64.sub
  local.get $2
  f64.const 1
  f64.add
  local.get $1
  f64.const 0
  f64.gt
  select
  f64.const 0.25
  f64.mul
  local.get $0
  i32.load offset=12
  f64.convert_i32_s
  f64.mul
  f32.demote_f64
  f32.floor
  i32.trunc_sat_f32_s
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=12
  i32.rem_s
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/Delaunator#_link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.tee $3
  i32.store
  local.get $3
  local.get $1
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#__set
  local.get $2
  i32.const -1
  i32.ne
  if
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=8
   local.tee $0
   i32.store
   local.get $0
   local.get $2
   local.get $1
   call $~lib/staticarray/StaticArray<u32>#__set
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/Delaunator#_addTriangle (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (param $6 i32) (result i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  i32.load offset=52
  local.set $7
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $8
  i32.store
  local.get $8
  local.get $7
  local.get $1
  call $~lib/staticarray/StaticArray<u32>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.store
  local.get $1
  local.get $7
  i32.const 1
  i32.add
  local.tee $1
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.store
  local.get $2
  local.get $7
  i32.const 2
  i32.add
  local.tee $2
  local.get $3
  call $~lib/staticarray/StaticArray<u32>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $7
  local.get $4
  call $index/Delaunator#_link
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $1
  local.get $5
  call $index/Delaunator#_link
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $0
  local.get $2
  local.get $6
  call $index/Delaunator#_link
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  local.get $0
  i32.load offset=52
  i32.const 3
  i32.add
  i32.store offset=52
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $7
 )
 (func $~lib/staticarray/StaticArray<i32>#__get (param $0 i32) (param $1 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1344
   i32.const 2080
   i32.const 78
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $index/Delaunator#_legalize (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 f64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 f64)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 f64)
  (local $18 f64)
  (local $19 f64)
  (local $20 f64)
  (local $21 f64)
  (local $22 f64)
  (local $23 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.const 20
  memory.fill
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=4
  local.tee $4
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load offset=8
  local.tee $7
  i32.store offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load
  local.tee $3
  i32.store offset=12
  loop $while-continue|0
   block $while-break|0
    local.get $1
    local.get $1
    i32.const 3
    i32.rem_s
    i32.sub
    local.tee $5
    local.get $1
    i32.const 2
    i32.add
    i32.const 3
    i32.rem_s
    i32.add
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $7
    i32.store
    local.get $7
    local.get $1
    call $~lib/staticarray/StaticArray<i32>#__get
    local.tee $10
    i32.const -1
    i32.eq
    if
     local.get $2
     i32.eqz
     br_if $while-break|0
     global.get $~lib/memory/__stack_pointer
     global.get $index/EDGE_STACK
     local.tee $1
     i32.store
     local.get $1
     local.get $2
     i32.const 1
     i32.sub
     local.tee $2
     call $~lib/staticarray/StaticArray<u32>#__get
     local.set $1
     br $while-continue|0
    end
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    local.get $9
    call $~lib/staticarray/StaticArray<u32>#__get
    local.set $13
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    local.get $1
    call $~lib/staticarray/StaticArray<u32>#__get
    local.set $14
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    local.get $5
    local.get $1
    i32.const 1
    i32.add
    i32.const 3
    i32.rem_s
    i32.add
    call $~lib/staticarray/StaticArray<u32>#__get
    local.set $15
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store
    local.get $4
    local.get $10
    local.get $10
    i32.const 3
    i32.rem_s
    i32.sub
    local.tee $8
    local.get $10
    i32.const 2
    i32.add
    i32.const 3
    i32.rem_s
    i32.add
    local.tee $16
    call $~lib/staticarray/StaticArray<u32>#__get
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $13
    i32.const 1
    i32.shl
    local.tee $11
    call $~lib/staticarray/StaticArray<f64>#__get
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $11
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<f64>#__get
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $14
    i32.const 1
    i32.shl
    local.tee $11
    call $~lib/staticarray/StaticArray<f64>#__get
    local.set $12
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $11
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<f64>#__get
    local.set $18
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $15
    i32.const 1
    i32.shl
    local.tee $11
    call $~lib/staticarray/StaticArray<f64>#__get
    local.set $19
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $11
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<f64>#__get
    local.set $20
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $5
    i32.const 1
    i32.shl
    local.tee $11
    call $~lib/staticarray/StaticArray<f64>#__get
    local.set $21
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store
    local.get $3
    local.get $11
    i32.const 1
    i32.add
    call $~lib/staticarray/StaticArray<f64>#__get
    local.tee $6
    f64.sub
    local.set $22
    local.get $12
    local.get $21
    f64.sub
    local.tee $23
    local.get $23
    f64.mul
    local.get $18
    local.get $6
    f64.sub
    local.tee $18
    local.get $18
    f64.mul
    f64.add
    local.set $12
    local.get $21
    f64.sub
    local.tee $17
    local.get $18
    local.get $19
    local.get $21
    f64.sub
    local.tee $19
    local.get $19
    f64.mul
    local.get $20
    local.get $6
    f64.sub
    local.tee $6
    local.get $6
    f64.mul
    f64.add
    local.tee $20
    f64.mul
    local.get $12
    local.get $6
    f64.mul
    f64.sub
    f64.mul
    local.get $22
    local.get $23
    local.get $20
    f64.mul
    local.get $12
    local.get $19
    f64.mul
    f64.sub
    f64.mul
    f64.sub
    local.get $17
    local.get $17
    f64.mul
    local.get $22
    local.get $22
    f64.mul
    f64.add
    local.get $23
    local.get $6
    f64.mul
    local.get $18
    local.get $19
    f64.mul
    f64.sub
    f64.mul
    f64.add
    f64.const 0
    f64.lt
    if
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store
     local.get $4
     local.get $1
     local.get $5
     call $~lib/staticarray/StaticArray<u32>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $4
     i32.store
     local.get $4
     local.get $10
     local.get $13
     call $~lib/staticarray/StaticArray<u32>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $7
     i32.store
     local.get $7
     local.get $16
     call $~lib/staticarray/StaticArray<i32>#__get
     local.tee $11
     i32.const -1
     i32.eq
     if
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store
      local.get $0
      i32.load offset=56
      local.set $5
      loop $do-loop|1
       block $do-break|1
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.store offset=16
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.load offset=24
        local.tee $13
        i32.store
        local.get $13
        local.get $5
        call $~lib/staticarray/StaticArray<u32>#__get
        local.get $16
        i32.eq
        if
         global.get $~lib/memory/__stack_pointer
         local.get $0
         i32.store offset=16
         global.get $~lib/memory/__stack_pointer
         local.get $0
         i32.load offset=24
         local.tee $13
         i32.store
         local.get $13
         local.get $5
         local.get $1
         call $~lib/staticarray/StaticArray<u32>#__set
         br $do-break|1
        end
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.store offset=16
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.load offset=16
        local.tee $13
        i32.store
        local.get $13
        local.get $5
        call $~lib/staticarray/StaticArray<u32>#__get
        local.set $5
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.store
        local.get $5
        local.get $0
        i32.load offset=56
        i32.ne
        br_if $do-loop|1
       end
      end
     end
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     local.get $0
     local.get $1
     local.get $11
     call $index/Delaunator#_link
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $7
     i32.store offset=16
     local.get $0
     local.get $10
     local.get $7
     local.get $9
     call $~lib/staticarray/StaticArray<i32>#__get
     call $index/Delaunator#_link
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store
     local.get $0
     local.get $9
     local.get $16
     call $index/Delaunator#_link
     global.get $~lib/memory/__stack_pointer
     global.get $index/EDGE_STACK
     local.tee $5
     i32.store
     local.get $2
     local.get $5
     i32.const 20
     i32.sub
     i32.load offset=16
     i32.const 2
     i32.shr_u
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      global.get $index/EDGE_STACK
      local.tee $5
      i32.store
      local.get $5
      local.get $2
      local.get $8
      local.get $10
      i32.const 1
      i32.add
      i32.const 3
      i32.rem_s
      i32.add
      call $~lib/staticarray/StaticArray<u32>#__set
      local.get $2
      i32.const 1
      i32.add
      local.set $2
     end
    else
     local.get $2
     i32.eqz
     br_if $while-break|0
     global.get $~lib/memory/__stack_pointer
     global.get $index/EDGE_STACK
     local.tee $1
     i32.store
     local.get $1
     local.get $2
     i32.const 1
     i32.sub
     local.tee $2
     call $~lib/staticarray/StaticArray<u32>#__get
     local.set $1
    end
    br $while-continue|0
   end
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $9
 )
 (func $index/Delaunator#update (param $0 i32)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 f64)
  (local $5 i32)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 f64)
  (local $19 f64)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  (local $24 f64)
  (local $25 f64)
  (local $26 f64)
  (local $27 f64)
  (local $28 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 72
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 72
   memory.fill
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load
   local.tee $13
   i32.store offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=16
   local.tee $23
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=20
   local.tee $14
   i32.store offset=12
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=24
   local.tee $22
   i32.store offset=16
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=28
   local.tee $20
   i32.store offset=20
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 4
   i32.shr_u
   local.set $15
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 0
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 1
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 0
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $8
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   i32.const 1
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $1
   loop $for-loop|0
    local.get $3
    local.get $15
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $3
     i32.const 1
     i32.shl
     local.tee $12
     call $~lib/staticarray/StaticArray<f64>#__get
     local.set $7
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $7
     local.get $6
     local.get $6
     local.get $7
     f64.gt
     select
     local.set $6
     local.get $13
     local.get $12
     i32.const 1
     i32.add
     call $~lib/staticarray/StaticArray<f64>#__get
     local.tee $9
     local.get $4
     local.get $4
     local.get $9
     f64.gt
     select
     local.set $4
     local.get $7
     local.get $8
     local.get $7
     local.get $8
     f64.gt
     select
     local.set $8
     local.get $9
     local.get $1
     local.get $1
     local.get $9
     f64.lt
     select
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=24
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=32
     local.tee $12
     i32.store
     local.get $12
     local.get $3
     local.get $3
     call $~lib/staticarray/StaticArray<u32>#__set
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|0
    end
   end
   local.get $6
   local.get $8
   f64.add
   f64.const 0.5
   f64.mul
   local.set $6
   local.get $4
   local.get $1
   f64.add
   f64.const 0.5
   f64.mul
   local.set $4
   f64.const 1.e+100
   local.set $1
   i32.const 0
   local.set $3
   loop $for-loop|1
    local.get $3
    local.get $15
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $3
     i32.const 1
     i32.shl
     local.tee $12
     call $~lib/staticarray/StaticArray<f64>#__get
     local.get $6
     f64.sub
     local.set $7
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $7
     local.get $7
     f64.mul
     local.get $13
     local.get $12
     i32.const 1
     i32.add
     call $~lib/staticarray/StaticArray<f64>#__get
     local.get $4
     f64.sub
     local.tee $7
     local.get $7
     f64.mul
     f64.add
     local.tee $7
     local.get $1
     f64.lt
     if
      local.get $3
      local.set $11
      local.get $7
      local.set $1
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|1
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $11
   i32.const 1
   i32.shl
   local.tee $3
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $19
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $3
   i32.const 1
   i32.add
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $18
   f64.const 1.e+100
   local.set $1
   i32.const 0
   local.set $3
   loop $for-loop|2
    local.get $3
    local.get $15
    i32.lt_s
    if
     local.get $3
     local.get $11
     i32.ne
     if
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $13
      local.get $3
      i32.const 1
      i32.shl
      local.tee $12
      call $~lib/staticarray/StaticArray<f64>#__get
      local.get $19
      f64.sub
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $4
      local.get $4
      f64.mul
      local.get $13
      local.get $12
      i32.const 1
      i32.add
      call $~lib/staticarray/StaticArray<f64>#__get
      local.get $18
      f64.sub
      local.tee $4
      local.get $4
      f64.mul
      f64.add
      local.tee $4
      f64.const 0
      f64.gt
      local.get $1
      local.get $4
      f64.gt
      i32.and
      if
       local.get $3
       local.set $5
       local.get $4
       local.set $1
      end
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|2
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $5
   i32.const 1
   i32.shl
   local.tee $3
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $3
   i32.const 1
   i32.add
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $7
   f64.const 1.e+100
   local.set $8
   i32.const 0
   local.set $3
   loop $for-loop|3
    local.get $3
    local.get $15
    i32.lt_s
    if
     local.get $3
     local.get $5
     i32.eq
     local.get $3
     local.get $11
     i32.eq
     i32.or
     i32.eqz
     if
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $13
      local.get $3
      i32.const 1
      i32.shl
      local.tee $12
      call $~lib/staticarray/StaticArray<f64>#__get
      local.get $19
      f64.sub
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $4
      local.get $4
      f64.mul
      local.get $13
      local.get $12
      i32.const 1
      i32.add
      call $~lib/staticarray/StaticArray<f64>#__get
      local.get $18
      f64.sub
      local.tee $6
      local.get $6
      f64.mul
      f64.add
      local.set $9
      local.get $6
      local.get $1
      local.get $19
      f64.sub
      local.tee $24
      local.get $24
      f64.mul
      local.get $7
      local.get $18
      f64.sub
      local.tee $25
      local.get $25
      f64.mul
      f64.add
      local.tee $26
      f64.mul
      local.get $25
      local.get $9
      f64.mul
      f64.sub
      f64.const 0.5
      local.get $24
      local.get $6
      f64.mul
      local.get $25
      local.get $4
      f64.mul
      f64.sub
      f64.div
      local.tee $6
      f64.mul
      local.tee $25
      local.get $25
      f64.mul
      local.get $24
      local.get $9
      f64.mul
      local.get $4
      local.get $26
      f64.mul
      f64.sub
      local.get $6
      f64.mul
      local.tee $4
      local.get $4
      f64.mul
      f64.add
      local.tee $4
      local.get $8
      f64.lt
      if
       local.get $4
       local.set $8
       local.get $3
       local.set $2
      end
     end
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|3
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $2
   i32.const 1
   i32.shl
   local.tee $3
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $6
   global.get $~lib/memory/__stack_pointer
   local.get $13
   i32.store
   local.get $13
   local.get $3
   i32.const 1
   i32.add
   call $~lib/staticarray/StaticArray<f64>#__get
   local.set $4
   local.get $8
   f64.const 1.e+99
   f64.gt
   if
    i32.const 0
    local.set $3
    loop $for-loop|4
     local.get $3
     local.get $15
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $13
      local.get $3
      i32.const 1
      i32.shl
      local.tee $2
      call $~lib/staticarray/StaticArray<f64>#__get
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store
      local.get $13
      local.get $2
      i32.const 1
      i32.add
      call $~lib/staticarray/StaticArray<f64>#__get
      local.set $4
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=36
      local.tee $2
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store offset=24
      local.get $2
      local.get $3
      local.get $1
      local.get $13
      i32.const 0
      call $~lib/staticarray/StaticArray<f64>#__get
      f64.sub
      local.tee $1
      i64.reinterpret_f64
      i64.const 1
      i64.shl
      i64.const 2
      i64.sub
      i64.const -9007199254740994
      i64.gt_u
      if (result f64)
       global.get $~lib/memory/__stack_pointer
       local.get $13
       i32.store offset=24
       local.get $4
       local.get $13
       i32.const 1
       call $~lib/staticarray/StaticArray<f64>#__get
       f64.sub
      else
       local.get $1
      end
      call $~lib/staticarray/StaticArray<f64>#__set
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|4
     end
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=28
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=32
    local.tee $2
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=28
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=36
    local.tee $3
    i32.store offset=24
    local.get $2
    local.get $3
    i32.const 0
    local.get $15
    i32.const 1
    i32.sub
    call $index/quicksort
    global.get $~lib/memory/__stack_pointer
    local.get $15
    call $~lib/staticarray/StaticArray<u32>#constructor
    local.tee $11
    i32.store offset=32
    f64.const -1.e+100
    local.set $1
    i32.const 0
    local.set $3
    loop $for-loop|5
     local.get $3
     local.get $15
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=32
      local.tee $2
      i32.store
      local.get $2
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__get
      local.set $5
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.load offset=36
      local.tee $2
      i32.store
      local.get $2
      local.get $5
      call $~lib/staticarray/StaticArray<f64>#__get
      local.tee $4
      local.get $1
      f64.gt
      if
       global.get $~lib/memory/__stack_pointer
       local.get $11
       i32.store
       local.get $10
       local.tee $2
       i32.const 1
       i32.add
       local.set $10
       local.get $11
       local.get $2
       local.get $5
       call $~lib/staticarray/StaticArray<u32>#__set
       local.get $4
       local.set $1
      end
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|5
     end
    end
    global.get $~lib/memory/__stack_pointer
    local.get $10
    call $~lib/staticarray/StaticArray<u32>#constructor
    local.tee $2
    i32.store offset=36
    i32.const 0
    local.set $5
    loop $for-loop|6
     local.get $5
     local.get $10
     i32.lt_s
     if
      global.get $~lib/memory/__stack_pointer
      local.get $2
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $11
      i32.store offset=24
      local.get $2
      local.get $5
      local.get $11
      local.get $5
      call $~lib/staticarray/StaticArray<u32>#__get
      call $~lib/staticarray/StaticArray<u32>#__set
      local.get $5
      i32.const 1
      i32.add
      local.set $5
      br $for-loop|6
     end
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store offset=24
    local.get $0
    local.get $2
    i32.store offset=40
    local.get $0
    local.get $2
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $index/EMPTY_STATIC_U32
    local.tee $2
    i32.store offset=24
    local.get $0
    local.get $2
    i32.store offset=44
    local.get $0
    local.get $2
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    global.get $~lib/memory/__stack_pointer
    global.get $index/EMPTY_STATIC_I32
    local.tee $2
    i32.store offset=24
    local.get $0
    local.get $2
    i32.store offset=48
    local.get $0
    local.get $2
    call $~lib/rt/itcms/__link
    global.get $~lib/memory/__stack_pointer
    i32.const 72
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   local.get $18
   local.get $4
   f64.sub
   local.get $1
   local.get $6
   f64.sub
   f64.mul
   local.tee $8
   local.get $19
   local.get $6
   f64.sub
   local.get $7
   local.get $4
   f64.sub
   f64.mul
   local.tee $9
   f64.add
   f64.abs
   local.set $24
   local.get $8
   local.get $9
   f64.sub
   local.tee $8
   f64.abs
   local.get $24
   f64.const 3.3306690738754716e-16
   f64.mul
   f64.ge
   i32.eqz
   if
    local.get $19
    local.get $18
    local.get $1
    local.get $7
    local.get $6
    local.get $4
    local.get $24
    call $orient2d/orient2dadapt
    f64.neg
    local.set $8
   end
   local.get $8
   f64.const 0
   f64.lt
   if (result i32)
    local.get $5
    local.get $1
    local.get $7
    local.get $2
    local.set $5
    local.get $6
    local.set $1
    local.get $4
    local.set $7
    local.set $4
    local.set $6
   else
    local.get $2
   end
   local.set $12
   global.get $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   local.get $6
   local.get $19
   f64.sub
   local.tee $8
   local.get $8
   f64.mul
   local.get $4
   local.get $18
   f64.sub
   local.tee $9
   local.get $9
   f64.mul
   f64.add
   local.set $24
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $10
   i32.store
   local.get $10
   local.get $19
   local.get $9
   local.get $1
   local.get $19
   f64.sub
   local.tee $25
   local.get $25
   f64.mul
   local.get $7
   local.get $18
   f64.sub
   local.tee $26
   local.get $26
   f64.mul
   f64.add
   local.tee $27
   f64.mul
   local.get $26
   local.get $24
   f64.mul
   f64.sub
   f64.const 0.5
   local.get $25
   local.get $9
   f64.mul
   local.get $26
   local.get $8
   f64.mul
   f64.sub
   f64.div
   local.tee $9
   f64.mul
   f64.add
   f64.store
   local.get $10
   local.get $18
   local.get $25
   local.get $24
   f64.mul
   local.get $8
   local.get $27
   f64.mul
   f64.sub
   local.get $9
   f64.mul
   f64.add
   f64.store offset=8
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=40
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=24
   local.get $0
   local.get $10
   i32.const 0
   call $~lib/staticarray/StaticArray<f64>#__get
   f64.store offset=64
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $10
   i32.store offset=24
   local.get $0
   local.get $10
   i32.const 1
   call $~lib/staticarray/StaticArray<f64>#__get
   f64.store offset=72
   i32.const 0
   local.set $3
   loop $for-loop|7
    local.get $3
    local.get $15
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $3
     i32.const 1
     i32.shl
     local.tee $2
     call $~lib/staticarray/StaticArray<f64>#__get
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $2
     i32.const 1
     i32.add
     call $~lib/staticarray/StaticArray<f64>#__get
     local.set $9
     global.get $~lib/memory/__stack_pointer
     local.get $10
     i32.store
     local.get $10
     i32.const 0
     call $~lib/staticarray/StaticArray<f64>#__get
     f64.sub
     local.set $8
     global.get $~lib/memory/__stack_pointer
     local.get $10
     i32.store
     local.get $9
     local.get $10
     i32.const 1
     call $~lib/staticarray/StaticArray<f64>#__get
     f64.sub
     local.set $9
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=24
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=36
     local.tee $2
     i32.store
     local.get $2
     local.get $3
     local.get $8
     local.get $8
     f64.mul
     local.get $9
     local.get $9
     f64.mul
     f64.add
     call $~lib/staticarray/StaticArray<f64>#__set
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|7
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=28
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=32
   local.tee $2
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=28
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=36
   local.tee $3
   i32.store offset=24
   local.get $2
   local.get $3
   i32.const 0
   local.get $15
   i32.const 1
   i32.sub
   call $index/quicksort
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $11
   i32.store offset=56
   i32.const 3
   local.set $17
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=44
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $23
   local.get $12
   local.get $5
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $14
   local.get $11
   local.get $23
   local.get $12
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=48
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $23
   local.get $11
   local.get $12
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $14
   local.get $5
   local.get $23
   local.get $11
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $14
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=52
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $23
   local.get $5
   local.get $11
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $23
   i32.store offset=24
   local.get $14
   local.get $12
   local.get $23
   local.get $5
   call $~lib/staticarray/StaticArray<u32>#__get
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $22
   i32.store
   local.get $22
   local.get $11
   i32.const 0
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $22
   i32.store
   local.get $22
   local.get $5
   i32.const 1
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $22
   i32.store
   local.get $22
   local.get $12
   i32.const 2
   call $~lib/staticarray/StaticArray<u32>#__set
   i32.const 0
   local.set $3
   loop $for-loop|8
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $3
    local.get $0
    i32.load offset=12
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $20
     i32.store
     local.get $20
     local.get $3
     i32.const -1
     call $~lib/staticarray/StaticArray<u32>#__set
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|8
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $20
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=24
   local.get $20
   local.get $0
   local.get $19
   local.get $18
   call $index/Delaunator#_hashKey
   local.get $11
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $20
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=24
   local.get $20
   local.get $0
   local.get $1
   local.get $7
   call $index/Delaunator#_hashKey
   local.get $5
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $20
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store offset=24
   local.get $20
   local.get $0
   local.get $6
   local.get $4
   call $index/Delaunator#_hashKey
   local.get $12
   call $~lib/staticarray/StaticArray<u32>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.const 0
   i32.store offset=52
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   local.get $11
   local.get $5
   local.get $12
   i32.const -1
   i32.const -1
   i32.const -1
   call $index/Delaunator#_addTriangle
   drop
   f64.const 0
   local.set $6
   f64.const 0
   local.set $4
   loop $for-loop|9
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store offset=24
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load offset=32
    local.tee $2
    i32.store
    local.get $16
    local.get $2
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 2
    i32.shr_u
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=24
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=32
     local.tee $2
     i32.store
     local.get $2
     local.get $16
     call $~lib/staticarray/StaticArray<u32>#__get
     local.set $21
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $21
     i32.const 1
     i32.shl
     local.tee $2
     call $~lib/staticarray/StaticArray<f64>#__get
     local.set $1
     global.get $~lib/memory/__stack_pointer
     local.get $13
     i32.store
     local.get $13
     local.get $2
     i32.const 1
     i32.add
     call $~lib/staticarray/StaticArray<f64>#__get
     local.set $7
     block $for-continue|9
      local.get $16
      i32.const 0
      i32.gt_s
      if
       local.get $7
       local.get $4
       f64.sub
       local.set $8
       global.get $index/EPSILON
       local.get $1
       local.get $6
       f64.sub
       local.tee $9
       f64.neg
       local.get $9
       local.get $9
       f64.const 0
       f64.lt
       select
       f64.ge
       if (result i32)
        global.get $index/EPSILON
        local.get $8
        f64.neg
        local.get $8
        local.get $8
        f64.const 0
        f64.lt
        select
        f64.ge
       else
        i32.const 0
       end
       br_if $for-continue|9
      end
      local.get $1
      local.set $6
      local.get $7
      local.set $4
      local.get $5
      local.get $21
      i32.eq
      local.get $11
      local.get $21
      i32.eq
      i32.or
      local.get $12
      local.get $21
      i32.eq
      i32.or
      br_if $for-continue|9
      i32.const 0
      local.set $10
      i32.const 0
      local.set $3
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store
      local.get $0
      local.get $6
      local.get $4
      call $index/Delaunator#_hashKey
      local.set $2
      loop $for-loop|10
       global.get $~lib/memory/__stack_pointer
       local.get $0
       i32.store
       local.get $3
       local.get $0
       i32.load offset=12
       i32.lt_s
       if
        block $for-break10
         global.get $~lib/memory/__stack_pointer
         local.get $20
         i32.store
         global.get $~lib/memory/__stack_pointer
         local.get $0
         i32.store offset=24
         local.get $20
         local.get $2
         local.get $3
         i32.add
         local.get $0
         i32.load offset=12
         i32.rem_s
         call $~lib/staticarray/StaticArray<i32>#__get
         local.tee $10
         i32.const -1
         i32.ne
         if (result i32)
          global.get $~lib/memory/__stack_pointer
          local.get $14
          i32.store
          local.get $14
          local.get $10
          call $~lib/staticarray/StaticArray<u32>#__get
          local.get $10
          i32.ne
         else
          i32.const 0
         end
         br_if $for-break10
         local.get $3
         i32.const 1
         i32.add
         local.set $3
         br $for-loop|10
        end
       end
      end
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store
      local.get $23
      local.get $10
      call $~lib/staticarray/StaticArray<u32>#__get
      local.tee $15
      local.set $3
      loop $while-continue|11
       block $while-break|11
        global.get $~lib/memory/__stack_pointer
        local.get $14
        i32.store
        local.get $14
        local.get $3
        call $~lib/staticarray/StaticArray<u32>#__get
        local.set $2
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $3
        i32.const 1
        i32.shl
        local.tee $10
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $1
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $10
        i32.const 1
        i32.add
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $7
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $2
        i32.const 1
        i32.shl
        local.tee $10
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $8
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $4
        local.get $13
        local.get $10
        i32.const 1
        i32.add
        call $~lib/staticarray/StaticArray<f64>#__get
        local.tee $9
        f64.sub
        local.get $1
        local.get $8
        f64.sub
        f64.mul
        local.get $6
        local.get $8
        f64.sub
        local.get $7
        local.get $9
        f64.sub
        f64.mul
        f64.sub
        f64.const 0
        f64.lt
        br_if $while-break|11
        local.get $15
        local.get $2
        local.tee $3
        i32.ne
        br_if $while-continue|11
        i32.const -1
        local.set $3
       end
      end
      local.get $3
      i32.const -1
      i32.eq
      br_if $for-continue|9
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $14
      i32.store offset=24
      local.get $14
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__get
      local.set $2
      global.get $~lib/memory/__stack_pointer
      local.get $22
      i32.store offset=24
      local.get $0
      local.get $3
      local.get $21
      local.get $2
      i32.const -1
      i32.const -1
      local.get $22
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__get
      call $index/Delaunator#_addTriangle
      local.set $2
      global.get $~lib/memory/__stack_pointer
      local.get $22
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      local.get $22
      local.get $21
      local.get $0
      local.get $2
      i32.const 2
      i32.add
      call $index/Delaunator#_legalize
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $22
      i32.store
      local.get $22
      local.get $3
      local.get $2
      call $~lib/staticarray/StaticArray<u32>#__set
      local.get $17
      i32.const 1
      i32.add
      local.set $17
      global.get $~lib/memory/__stack_pointer
      local.get $14
      i32.store
      local.get $14
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__get
      local.set $2
      loop $while-continue|12
       global.get $~lib/memory/__stack_pointer
       local.get $14
       i32.store
       local.get $14
       local.get $2
       call $~lib/staticarray/StaticArray<u32>#__get
       local.set $10
       global.get $~lib/memory/__stack_pointer
       local.get $13
       i32.store
       local.get $13
       local.get $2
       i32.const 1
       i32.shl
       local.tee $28
       call $~lib/staticarray/StaticArray<f64>#__get
       local.set $1
       global.get $~lib/memory/__stack_pointer
       local.get $13
       i32.store
       local.get $13
       local.get $28
       i32.const 1
       i32.add
       call $~lib/staticarray/StaticArray<f64>#__get
       local.set $7
       global.get $~lib/memory/__stack_pointer
       local.get $13
       i32.store
       local.get $13
       local.get $10
       i32.const 1
       i32.shl
       local.tee $28
       call $~lib/staticarray/StaticArray<f64>#__get
       local.set $8
       global.get $~lib/memory/__stack_pointer
       local.get $13
       i32.store
       local.get $4
       local.get $13
       local.get $28
       i32.const 1
       i32.add
       call $~lib/staticarray/StaticArray<f64>#__get
       local.tee $9
       f64.sub
       local.get $1
       local.get $8
       f64.sub
       f64.mul
       local.get $6
       local.get $8
       f64.sub
       local.get $7
       local.get $9
       f64.sub
       f64.mul
       f64.sub
       f64.const 0
       f64.ge
       i32.eqz
       if
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.store
        global.get $~lib/memory/__stack_pointer
        local.get $22
        i32.store offset=24
        local.get $22
        local.get $21
        call $~lib/staticarray/StaticArray<u32>#__get
        local.set $28
        global.get $~lib/memory/__stack_pointer
        local.get $22
        i32.store offset=24
        local.get $0
        local.get $2
        local.get $21
        local.get $10
        local.get $28
        i32.const -1
        local.get $22
        local.get $2
        call $~lib/staticarray/StaticArray<u32>#__get
        call $index/Delaunator#_addTriangle
        local.set $28
        global.get $~lib/memory/__stack_pointer
        local.get $22
        i32.store
        global.get $~lib/memory/__stack_pointer
        local.get $0
        i32.store offset=24
        local.get $22
        local.get $21
        local.get $0
        local.get $28
        i32.const 2
        i32.add
        call $index/Delaunator#_legalize
        call $~lib/staticarray/StaticArray<u32>#__set
        global.get $~lib/memory/__stack_pointer
        local.get $14
        i32.store
        local.get $14
        local.get $2
        local.get $2
        call $~lib/staticarray/StaticArray<u32>#__set
        local.get $17
        i32.const 1
        i32.sub
        local.set $17
        local.get $10
        local.set $2
        br $while-continue|12
       end
      end
      local.get $3
      local.get $15
      i32.eq
      if
       loop $while-continue|13
        global.get $~lib/memory/__stack_pointer
        local.get $23
        i32.store
        local.get $23
        local.get $3
        call $~lib/staticarray/StaticArray<u32>#__get
        local.set $10
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $10
        i32.const 1
        i32.shl
        local.tee $15
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $1
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $15
        i32.const 1
        i32.add
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $7
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $13
        local.get $3
        i32.const 1
        i32.shl
        local.tee $15
        call $~lib/staticarray/StaticArray<f64>#__get
        local.set $8
        global.get $~lib/memory/__stack_pointer
        local.get $13
        i32.store
        local.get $4
        local.get $13
        local.get $15
        i32.const 1
        i32.add
        call $~lib/staticarray/StaticArray<f64>#__get
        local.tee $9
        f64.sub
        local.get $1
        local.get $8
        f64.sub
        f64.mul
        local.get $6
        local.get $8
        f64.sub
        local.get $7
        local.get $9
        f64.sub
        f64.mul
        f64.sub
        f64.const 0
        f64.ge
        i32.eqz
        if
         global.get $~lib/memory/__stack_pointer
         local.get $0
         i32.store
         global.get $~lib/memory/__stack_pointer
         local.get $22
         i32.store offset=24
         local.get $22
         local.get $3
         call $~lib/staticarray/StaticArray<u32>#__get
         local.set $15
         global.get $~lib/memory/__stack_pointer
         local.get $22
         i32.store offset=24
         local.get $0
         local.get $10
         local.get $21
         local.get $3
         i32.const -1
         local.get $15
         local.get $22
         local.get $10
         call $~lib/staticarray/StaticArray<u32>#__get
         call $index/Delaunator#_addTriangle
         local.set $15
         global.get $~lib/memory/__stack_pointer
         local.get $0
         i32.store
         local.get $0
         local.get $15
         i32.const 2
         i32.add
         call $index/Delaunator#_legalize
         drop
         global.get $~lib/memory/__stack_pointer
         local.get $22
         i32.store
         local.get $22
         local.get $10
         local.get $15
         call $~lib/staticarray/StaticArray<u32>#__set
         global.get $~lib/memory/__stack_pointer
         local.get $14
         i32.store
         local.get $14
         local.get $3
         local.get $3
         call $~lib/staticarray/StaticArray<u32>#__set
         local.get $17
         i32.const 1
         i32.sub
         local.set $17
         local.get $10
         local.set $3
         br $while-continue|13
        end
       end
      end
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=56
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=24
      local.get $23
      local.get $21
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=24
      local.get $0
      local.get $23
      local.get $21
      call $~lib/staticarray/StaticArray<u32>#__get
      i32.store offset=56
      global.get $~lib/memory/__stack_pointer
      local.get $14
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=60
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=24
      local.get $23
      local.get $2
      local.get $21
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $23
      i32.store offset=24
      local.get $14
      local.get $3
      local.get $23
      local.get $2
      call $~lib/staticarray/StaticArray<u32>#__get
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $14
      i32.store
      local.get $14
      local.get $21
      local.get $2
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $20
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      local.get $20
      local.get $0
      local.get $6
      local.get $4
      call $index/Delaunator#_hashKey
      local.get $21
      call $~lib/staticarray/StaticArray<u32>#__set
      global.get $~lib/memory/__stack_pointer
      local.get $20
      i32.store
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store offset=24
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store offset=28
      local.get $13
      local.get $3
      i32.const 1
      i32.shl
      local.tee $2
      call $~lib/staticarray/StaticArray<f64>#__get
      local.set $1
      global.get $~lib/memory/__stack_pointer
      local.get $13
      i32.store offset=28
      local.get $20
      local.get $0
      local.get $1
      local.get $13
      local.get $2
      i32.const 1
      i32.add
      call $~lib/staticarray/StaticArray<f64>#__get
      call $index/Delaunator#_hashKey
      local.get $3
      call $~lib/staticarray/StaticArray<u32>#__set
     end
     local.get $16
     i32.const 1
     i32.add
     local.set $16
     br $for-loop|9
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $17
   call $~lib/staticarray/StaticArray<u32>#constructor
   local.set $2
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=24
   local.get $0
   local.get $2
   i32.store offset=40
   local.get $0
   local.get $2
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.load offset=56
   local.set $10
   i32.const 0
   local.set $3
   loop $for-loop|14
    local.get $3
    local.get $17
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=24
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=40
     local.tee $2
     i32.store
     local.get $2
     local.get $3
     local.get $10
     call $~lib/staticarray/StaticArray<u32>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $14
     i32.store
     local.get $14
     local.get $10
     call $~lib/staticarray/StaticArray<u32>#__get
     local.set $10
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     br $for-loop|14
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=52
   call $~lib/staticarray/StaticArray<u32>#constructor
   local.tee $2
   i32.store offset=64
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.load offset=52
   call $~lib/staticarray/StaticArray<i32>#constructor
   local.tee $3
   i32.store offset=68
   i32.const 0
   local.set $10
   loop $for-loop|15
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store
    local.get $10
    local.get $0
    i32.load offset=52
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=28
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=4
     local.tee $5
     i32.store offset=24
     local.get $2
     local.get $10
     local.get $5
     local.get $10
     call $~lib/staticarray/StaticArray<u32>#__get
     call $~lib/staticarray/StaticArray<u32>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store offset=28
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load offset=8
     local.tee $5
     i32.store offset=24
     local.get $3
     local.get $10
     local.get $5
     local.get $10
     call $~lib/staticarray/StaticArray<i32>#__get
     call $~lib/staticarray/StaticArray<u32>#__set
     local.get $10
     i32.const 1
     i32.add
     local.set $10
     br $for-loop|15
    end
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store offset=24
   local.get $0
   local.get $2
   i32.store offset=44
   local.get $0
   local.get $2
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store offset=24
   local.get $0
   local.get $3
   i32.store offset=48
   local.get $0
   local.get $3
   call $~lib/rt/itcms/__link
   global.get $~lib/memory/__stack_pointer
   i32.const 72
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 35264
  i32.const 35312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $index/Delaunator#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store offset=8
  global.get $~lib/memory/__stack_pointer
  i32.const 80
  i32.const 8
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=24
  local.get $1
  i32.const 0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_I32
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=28
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_U32
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=32
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_F64
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=36
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_U32
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=40
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_U32
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=44
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  global.get $index/EMPTY_STATIC_I32
  local.tee $2
  i32.store offset=8
  local.get $1
  local.get $2
  i32.store offset=48
  local.get $1
  local.get $2
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=52
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=56
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  f64.const 0
  f64.store offset=64
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  f64.const 0
  f64.store offset=72
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=4
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 4
  i32.shr_u
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  i32.const 1
  i32.shl
  i32.const 5
  i32.sub
  local.tee $0
  i32.const 0
  local.get $0
  i32.const 0
  i32.gt_s
  select
  i32.const 3
  i32.mul
  local.tee $0
  call $~lib/staticarray/StaticArray<u32>#constructor
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $3
  i32.store offset=8
  local.get $1
  local.get $3
  i32.store offset=4
  local.get $1
  local.get $3
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $0
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  local.get $2
  f32.convert_i32_s
  f32.sqrt
  f32.ceil
  i32.trunc_sat_f32_s
  i32.store offset=12
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=16
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=20
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=24
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=12
  local.get $1
  i32.load offset=12
  call $~lib/staticarray/StaticArray<i32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=28
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  call $~lib/staticarray/StaticArray<u32>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=32
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $2
  call $~lib/staticarray/StaticArray<f64>#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store offset=8
  local.get $1
  local.get $0
  i32.store offset=36
  local.get $1
  local.get $0
  call $~lib/rt/itcms/__link
  i32.const 0
  local.set $0
  loop $for-loop|0
   local.get $0
   local.get $2
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=16
    local.tee $3
    i32.store offset=4
    local.get $3
    local.get $0
    i32.const 0
    call $~lib/staticarray/StaticArray<u32>#__set
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=20
    local.tee $3
    i32.store offset=4
    local.get $3
    local.get $0
    i32.const 0
    call $~lib/staticarray/StaticArray<u32>#__set
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=24
    local.tee $3
    i32.store offset=4
    local.get $3
    local.get $0
    i32.const 0
    call $~lib/staticarray/StaticArray<u32>#__set
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=32
    local.tee $3
    i32.store offset=4
    local.get $3
    local.get $0
    local.get $0
    call $~lib/staticarray/StaticArray<u32>#__set
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=36
    local.tee $3
    i32.store offset=4
    local.get $3
    local.get $0
    f64.const 0
    call $~lib/staticarray/StaticArray<f64>#__set
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $0
  loop $for-loop|1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=4
   local.get $0
   local.get $1
   i32.load offset=12
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=28
    local.tee $2
    i32.store offset=4
    local.get $2
    local.get $0
    i32.const -1
    call $~lib/staticarray/StaticArray<u32>#__set
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|1
   end
  end
  i32.const 0
  local.set $0
  loop $for-loop|2
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=4
   local.tee $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=4
    local.tee $2
    i32.store offset=4
    local.get $2
    local.get $0
    i32.const 0
    call $~lib/staticarray/StaticArray<u32>#__set
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|2
   end
  end
  i32.const 0
  local.set $0
  loop $for-loop|3
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.load offset=8
   local.tee $2
   i32.store offset=4
   local.get $0
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 2
   i32.shr_u
   i32.lt_s
   if
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load offset=8
    local.tee $2
    i32.store offset=4
    local.get $2
    local.get $0
    i32.const -1
    call $~lib/staticarray/StaticArray<u32>#__set
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|3
   end
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store offset=4
  local.get $1
  call $index/Delaunator#update
  global.get $~lib/memory/__stack_pointer
  i32.const 16
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $index/getTriangles (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store
  global.get $index/delaunatorInstance
  if
   global.get $~lib/memory/__stack_pointer
   global.get $index/delaunatorInstance
   local.tee $0
   i32.store offset=4
   local.get $0
   i32.eqz
   if
    i32.const 2144
    i32.const 2272
    i32.const 473
    i32.const 34
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   i32.load offset=44
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 0
  call $~lib/staticarray/StaticArray<u32>#constructor
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $~lib/staticarray/StaticArray<u32>#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 268435455
  i32.gt_u
  if
   i32.const 1056
   i32.const 2080
   i32.const 51
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 2
  i32.shl
  i32.const 5
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/staticarray/StaticArray<i32>#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 268435455
  i32.gt_u
  if
   i32.const 1056
   i32.const 2080
   i32.const 51
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 2
  i32.shl
  i32.const 6
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/staticarray/StaticArray<f64>#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2472
  i32.lt_s
  if
   i32.const 35264
   i32.const 35312
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store
  local.get $0
  i32.const 134217727
  i32.gt_u
  if
   i32.const 1056
   i32.const 2080
   i32.const 51
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.const 3
  i32.shl
  i32.const 7
  call $~lib/rt/itcms/__new
  local.tee $0
  i32.store
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:index/createDelaunator (param $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2472
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.store
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store
   local.get $0
   call $index/Delaunator#constructor
   global.set $index/delaunatorInstance
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 35264
  i32.const 35312
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
)
