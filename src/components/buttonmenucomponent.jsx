<div>
              <h5 className="md:hidden text-gray-700 font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex text-white text-bold items-center gap-x-2 bg-blue-900 p-2 rounded-lg transition-colors hover:bg-blue-950">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to={`/perfil/${empleado.id_empleado}`} 
                    className="rounded-lg transition-colors text-gray-700 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Ver Registro
                  </Link>
                </MenuItem>
              </Menu>
            </div>